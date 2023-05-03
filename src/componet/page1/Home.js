import React from "react";
import Imageplace from "./Imageplace";
import Ellp from "../images/Newphotos/Home.png";

import "./home.css";
import { FiPlayCircle } from "react-icons/fi";
import Header from "../common/Header";
import { Link } from "react-router-dom";
import Navbar from "../page3/NavbarQ";
import signupq from "../images/signupq.png"
function Home() {

  
  if(localStorage.getItem("points")==null){
  localStorage.setItem("points","0");
}
else{
  localStorage.setItem("points",localStorage.getItem("points"));

}
  return (
    <div>
      {/* <Header />
       */}
      <Navbar />

      <div className="homediv smallhomediv">

        <div className="imgEdiv">
          <img src={Ellp} alt="" className="firstimg" />
        </div>
        
        <div className="Hometextdiv">

          <div className="leftsec">

          <h1 className="maintext">Be The Change</h1>
          <h1 className="maintext">Do Missions.Earn</h1>
          <h1 className="maintext">Rewards</h1>
          </div>

          <div className="rightbtnsection">


          <p className="maintext2">
            Have fun doing missions for impact
          </p>
          <p className="maintext2">
          driven brands and earn rewards.
                    </p>
          <div className="butdiv">
           
            <Link to="/MyQuest">
             <img src={signupq} alt="" />
            </Link>

          </div>
          </div>

          {/* <div className="imgEdiv1">
            <img src={Ellp} alt="" />
          </div> */}
        </div>
      </div>
      <Imageplace />
    </div>
  );
}

export default Home;
