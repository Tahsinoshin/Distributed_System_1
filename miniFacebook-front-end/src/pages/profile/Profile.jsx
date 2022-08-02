import "./profile.css"
import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"

export default function Profile() {
  return (
    <>
    <Topbar/>
    <div className="profile">
        
            <Sidebar/>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img src="assets/index1.jpeg" alt="" className="profileCoverImg" />
                        <img src="assets/images.jpeg" alt="" className="profileUserImg" />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">USERRRR</h4>
                        <span className="profileDesc">hello my friends!</span>
                    </div>
                    
                </div>
                <div className="profileRightBottom">
                    <Feed/>
                    <Rightbar />
    
                </div>
            </div>
    </div>
 
    

    </>
    
  )
}
