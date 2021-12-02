import "./profile.css";
//import Topbar from "../../topbar/Topbar";
import Header from "../../Header";
import Leftbar from "../../leftbar/leftbar";
import Feed from "../../feed/Feed";
import Rightbar from "../../rightbar/Rightbar";

export default function Profile() {
  return (
    <>
      {/* <Topbar /> */}
      <Header />
      <div className="profile">
        <Leftbar />
        {/*------------------------------------*/}
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/post/3.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/person/7.png"
                alt=""
              />
            </div>

            {/*--------------------------------------*/}
            <div className="profileInfo">
              <h4 className="profileInfoName">ANTASH SHRIVASTAVA</h4>
              {/* <span className="profileInfoDesc">Whats poppin ?</span> */}
            </div>
            {/*--------------------------------------*/}
          </div>


          <div className="content">
           <div className="profileRightBottom">
            <Feed className="ProfileFeedCss"/>
            <Rightbar profile />
           </div>
          </div>


        </div>
        {/*--------------------------------------*/}
      </div>
    </>
  );
}
