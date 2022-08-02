import "./rightbar.css";

export default function Rightbar() {
  const userImg = "";
  const userName = "";

  const checkUserImg = () => {
    if (userImg === "") return "./assets/index.png";
  };

  const checkUserName = () => {
    if (userName === "") return "Something";
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="" alt="" />
          <span className="birthdayText"></span>
        </div>
      </div>
    </div>
  );
}
