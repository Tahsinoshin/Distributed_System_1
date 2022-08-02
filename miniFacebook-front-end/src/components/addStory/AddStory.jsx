import React from 'react'
import './addStory.css'
import { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
function AddStory({ profileSrc, setRenderReel}) {
  const [file, setFile] = useState();

  const onSubmit = () => {
    // console.log("kaj kore na");
    const data = new FormData();
    data.append('image', file);

    fetch("http://localhost:4000/api/post/image", {
      method: "POST",
      body: data,
    }).then(response => response.json()).then(
      obj => {

        console.log(obj.fileId);
        postImageID(obj.fileId);
      });
  }
  const postImageID = (storyId) => {
    fetch("http://localhost:4000/api/post/story", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: storyId,
        date: new Date().toDateString()
      }),
    }).then(response => response.json()).then(
      obj =>{
      console.log(obj);
      setRenderReel(prev => !prev);
    });
  }


  return (
    <div className='addstory' style={{backgroundImage:`url(${profileSrc})`}}>
       
      <button><AddCircleIcon/></button> 
      <h4>Add Story</h4>

      
      <input type="file" name="avatar"  onChange={ event => {
          const file = event.target.files[0];
          setFile(file)}}
          />
      <button onClick={onSubmit}>post story</button>
                
       
    </div>
  ) 
}

export default AddStory