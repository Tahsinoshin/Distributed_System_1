import "./topbar.css";
import {Search , Person, Chat, Notifications} from "@mui/icons-material"

export default function Topbar(){

    const userImg = "";

  const checkUserImg = () => {
    if (userImg === "")
      return "./assets/index.png";
  }
    return(
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">miniFacebook</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon"/>
                    <input placeholder="Search for friend, post or video" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <span className="topbarLink">Homepage</span>
                <span className="topbarLink">Timeline</span>

                <div className="topbarIcons">
                <div classNam="topbarIconItem">
                    <Person/>
                    <span className="topbarIconBadge">1</span>
                </div>
                <div classNam="topbarIconItem">
                    <Chat/>
                    <span className="topbarIconBadge">2</span>
                </div>
                <div classNam="topbarIconItem">
                    <Notifications/>
                    <span className="topbarIconBadge">3</span>
                </div>
            </div>

            <img src={ checkUserImg() }  alt="" className="topbarImg"/>
            
            </div>

        </div>
    )
}