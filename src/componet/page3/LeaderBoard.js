import background from "./replace6.png";
import svg from "./svg.png";
import profile from "./avatar.png";
import "./Leader.css";
import Navbar from "./NavbarQ";
import Header from "../common/Header";
import { useState } from "react";


const dummyArr = [
  {
    index: 1,
    name: "perry",
    points: 200,
  },
  {
    index: 2,
    name: "sharry",
    points: 100,
  },
  {
    index: 3,
    name: "harry",
    points: 300,
  },
  {
    index: 4,
    name: "cherry",
    points: 400,
  },
  {
    index: 5,
    name: "ashok",
    points: 50,
  },
  {
    index: 6,
    name: "chetan",
    points: 1000,
  },
  {
    index: 7,
    name: "jimmy",
    points: 1200,
  },
];

const LeaderBoard = () => {
  const [dataleaderboard, setdataleaderboard] = useState(dummyArr)
  const getLeaderBoard = async() => {
    const laeaderBoardData =  await fetch('http://31.220.48.246:4000/user/leaderboard').then(response => response.json())
    .then(data => {
     
      return data})
      setdataleaderboard(laeaderBoardData);
  }
  getLeaderBoard();

  return (
    <div className="containerWrapper">
      <Header />

      <div className="container">
        <div className="section1">
          <img className="svgimg" src={svg} alt="" />
          <img className="background" src={background} alt="" />
          <div className="cards">
            <div className="card">
              <div className="profileImg">
                <div className="rank">
                  <p className="ranktext">1</p>
                </div>
                <img className="avatar" src={profile} alt="" />
              </div>

              <p className="head">bennyhill</p>
              <p className="xp">1515xp</p>
            </div>
            <div className="card">
              <div className="profileImg">
                <div className="rank">
                  <p className="ranktext">1</p>
                </div>
                <img className="avatar" src={profile} alt="" />
              </div>
              <p className="head">bennyhill</p>
              <p className="xp">1515xp</p>
            </div>
            <div className="card">
              <div className="profileImg">
                <div className="rank">
                  <p className="ranktext">1</p>
                </div>
                <img className="avatar" src={profile} alt="" />
              </div>
              <p className="head">bennyhill</p>
              <p className="xp">1515xp</p>
            </div>
          </div>
        </div>
        <div className="section2">
          <p>
            Your rank is <span style={{ color: "#6366F1" }}>#---</span> with{" "}
            <span style={{ color: "#FBBF24" }}>--- XP</span>
          </p>
          <div className="walletText">
            <p>
              Earn <span style={{ color: "#FBBF24" }}>XP</span>, move UP
            </p>
            <button>Connect wallet & check ranking</button>
          </div>
        </div>
        <div className="section3">
          <div className="LabelDiv">
            <p>Member</p>
            <p>XP</p>
          </div>
          {dataleaderboard.map((items) => (
            <div className="header">
              <div className="innnerDiv">
                <span className="num">{items.index}</span>
                <img className="user" src={profile} alt="" />
                <p>{items.name.slice(0,5)}....{items.name.slice(-5)}</p>
              </div>
              <div>
                <p>{items.points} Xp</p>
              </div>
            </div>
          ))}

          <div className="content"></div>
          <div className="bottom"></div>
        </div>
      </div>
    </div>
  );
};
export default LeaderBoard;
