import "./feed.css";

import Share from "../../components/share/Share";
import Post from "../../components/post/Post"
import StoryReel from "../../components/storyReel/StoryReel"

import { useState } from "react";
import { useEffect } from "react";

export default function Feed({ fullName }){

  const [renderFeed, setRenderFeed] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect (() => {
    fetch("http://localhost:4000/api/post", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(response => response.json()).then(
        obj => { 
          setPosts(obj);
          // posts.reverse();
        });
  }, [renderFeed])


    return(
      
        <div className="feed">
            <div className="feedWrapper">
               <StoryReel/>
               
                <Share renderFeed={ renderFeed } setRenderFeed={ setRenderFeed } fullName={ fullName }/>
                { 
                    posts.map((p) => {
                    return <Post key = { p.key } post = { p } />;
                    }) 
                }
            </div>
        </div>
    )
}