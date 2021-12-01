//import Topbar from "../../components/topbar/Topbar";
import Header from "../../Header";
import Leftbar from "../../components/leftbar/leftbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css"

export default function Home() {
  return (
    <>
      {/* <Topbar /> */}
      <Header/>
      <div className="homeContainer">
        <Leftbar />
        <Feed/>
        <Rightbar/>
      </div>
    </>
  );
}
