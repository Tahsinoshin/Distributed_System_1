import "./storyReel.css"

import Story from '../story/Story'
import AddStory from "../addStory/AddStory"

import { useState } from "react"
import { useEffect } from "react";

function StoryReel() {
  const defaultAddImg = "./assets/defaultAddImg.jpeg";

  const [storyIds, setStoryIds] = useState([]);
  const [renderReel, setRenderReel] = useState(false);

  useEffect(() =>  {
    fetch("http://localhost:4000/api/post/story", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(response => response.json()).then(
        obj =>{ 
          setStoryIds(obj);
        }
    );
  }, [renderReel]);

  return (
    <div className='storyReel'>
      <AddStory
       
        profileSrc={ defaultAddImg }
        setRenderReel= { setRenderReel }
        renderReel={ renderReel }
      />
      { 
        storyIds.map((s) => {
          return  <Story
                    key = {s.key} 
                    imageId = { s.id } 
                    title = { s.fullName } 
                  />;
        }) 
      }
    </div>
  )
}

export default StoryReel