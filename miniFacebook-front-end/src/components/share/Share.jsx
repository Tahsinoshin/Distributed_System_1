import "./share.css";
import { useRef } from "react";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";

export default function Share({ setRenderFeed , fullName }) {
  const userFullName = fullName;
  const postMsgRef = useRef(null);
  const userImg = "";

  const checkUserImg = () => {
    if (userImg === "") return "./assets/index.png";
  };

  const sharePost = () => {
    fetch("http://localhost:4000/api/post", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: userFullName,
        message: postMsgRef.current.value,
        date: new Date().toDateString(),
      }),
    })
      .then((response) => response.json())
      .then((obj) => {
        console.log(obj);
        setRenderFeed((prev) => !prev);
      });
  };

  return (
    <div className="share">
      <div className="shareTop">
      <img className="shareProfileImg" src={ checkUserImg() } alt="Img" />
        <input  ref = { postMsgRef }
            placeholder={ "what's on your mind " + fullName + " ?" }
             className="shareInput" />
      </div>
      <hr className="shareHr" />
      <div className="shareBottom">
        <div className="shareOptions">
          <div className="shareOption">
            <PermMedia htmlColor="tomato" className="shareOptionIcon" />
            <span className="shareOptionText">Photo/Video</span>
          </div>
          <div className="shareOption">
            <Label htmlColor="blue" className="shareOptionIcon" />
            <span className="shareOptionText">Location</span>
          </div>
          <div className="shareOption">
            <Room htmlColor="green" className="shareOptionIcon" />
            <span className="shareOptionText">Tag</span>
          </div>
          <div className="shareOption">
            <EmojiEmotions htmlColor="goldenrod" className="shareOptionIcon" />
            <span className="shareOptionText">Feelings</span>
          </div>

          <button className="shareButton"  onClick={ sharePost }>Share</button>
        </div>
      </div>
    </div>
  );
}
