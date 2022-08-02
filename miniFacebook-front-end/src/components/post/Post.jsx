import "./post.css"
import {MoreVert} from "@mui/icons-material"

import { Users } from "../../dummyData";

export default function Post({post}) {

    const postProfileName = post.fullName;
    var postMessage = post?.message;
    var postProfileImg = "";
    const postDate = new Date(post.date).toDateString();

    const checkProfileImg = () => {
        if (postProfileImg === "" )
            return "./assets/index.png";
    }

  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                <img src={ checkProfileImg() } alt="image" className="postProfileImg" />
                    <span className="postProfileName">{ postProfileName }</span>
                    <span className="postDate">{ postDate }</span>


                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>

            </div>
            <div className="postCenter">
                <span className="postText">
                    { postMessage }
                </span>
                
            </div>
            <div className="postBottom">
                <div className="postBottomLeft"></div>
                <div className="postBottomRight"></div>

            </div>

        </div>
      
    </div>
  );
}
