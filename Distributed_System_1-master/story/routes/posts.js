const router = require('express').Router();
const Joi = require('joi');

const {Post} = require('../models/post.js');
const {Story} = require('../models/story.js')
const verify = require('../utils/verify.js');
const Minio = require('../dbObject.js');

const multer = require('multer'); 
const multa = multer({dest: "uploads/"})

router.get('/', (req, res) => {
    Post.find((err, doc) => {
        if(!err)    
            res.send(doc);
        else
            console.log('Error in fetching user data: ' + JSON.stringify(err, undefined, 2));
    }).sort({$natural:-1}).limit(10);
});

router.get('/story', (req, res) => {
    Story.find((err, doc) => {
        if(!err)    
            res.send(doc);
        else
            console.log('Error in fetching story data: ' + JSON.stringify(err, undefined, 2));
    });
});

router.post("/", (req, res) => {
    try {
        
            
        //const hasFullName = verify.verifyUser(req.body.jwtToken);
        
        //if(hasFullName){
            new Post({
                fullName: req.body.fullName,
                message: req.body.message,
                date: new Date().getTime(),
            }).save((err, doc) => {
                if(err) res.status(402).send({ message: "Error at saving post data !!!", error: err});
                else res.status(200).send({ message: "Post saved successfully ..." });
            });
       // }
        //else 
            //res.status(401).send({ message: "Invlaid token !!!"});
        
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error at post" });
    }
});

router.post("/story", (req, res) => {
    try {
        new Story({
            fullName: req.body.fullName,
            id: req.body.id,
            date: req.body.date,
        }).save((err, doc) => {
            if(err) res.status(402).send({ message: "Error at saving story id data !!!", error: err});
            else res.status(200).send({ message: "Story id saved successfully ..." });
        }); 
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error at storing story id" });
    }
})

router.post("/image", multa.single('image'),(req, res) => {
    try {   
        var filePath = "/home/kazimuktadir/Desktop/nosin/Distributed_System_1-master/story/"+req.file.path;
        var metaData = {
            'Content-Type': 'application/octet-stream',
            'X-Amz-Meta-Testing': 1234,
            'example': 5678
        };
        var fileName = new Date().getTime() + ".png";
        console.log(filePath)
        Minio.minioClient.fPutObject(process.env.MINIO_BUCKET, fileName, filePath, metaData, function(err, etag) {
            if (err) return res.status(402).send({ message: "Error at saving image data !!!", error: err});
            res.status(200).send({ message: "Image saved successfully ...", fileId: fileName });
        });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error at posting image" });
    }
});

router.get("/image/:id", (req, res) => {
    try {
        let data;
        console.log(req.params.id)
        Minio.minioClient.getObject(process.env.MINIO_BUCKET, req.params.id, (err, objStream) => {
            if(err) {
                return res.status(404).send({ message: "Image not found" });
            }
            objStream.on('data', (chunk) => {
                data = !data ? new Buffer(chunk) : Buffer.concat([data, chunk]);
            });
            objStream.on('end', () => {
                res.writeHead(200, { 'Content-Type': 'image/jpeg' });
                res.write(data);
                res.end();
            });
        });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error at fetching image" });
    }
});

const validate = (data) => {
	const schema = Joi.object({
		fullName: Joi.string().label("Full name"),
		message: Joi.string().label("Message"),
        date: Joi.string().required().label("Date"),
        jwtToken: Joi.string().label("Jwt-token"),
	});
	return schema.validate(data);
};

module.exports = router;