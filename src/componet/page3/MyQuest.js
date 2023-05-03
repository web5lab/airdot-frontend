import React, { useEffect, useState } from "react";
import "./myQuest.css";
import Card from "./Card";
import img1 from "../images/Firebond/div-1.png";
import Navbar from "./NavbarQ";
import QuestCard from "../utility/QuestCard/QuestCard";
import { useDispatch, useSelector } from "react-redux";
import { allQuest, getQuest } from "../../redux/quest/quest.actions";
import { Grid } from "@chakra-ui/react";
import {
  AUTO,
  FILL_80PARENT,
  FILL_PARENT,
  R1,
  R2,
  R3,
  R4,
  SB,
} from "../../constants/typography";
import { Link, useSearchParams } from "react-router-dom";
import Header from "../common/Header";
import { IntilizeData } from "../../services/connectWallet";

function MyQuest() {
  let {
    loading: qloading,
    error: qerror,
    data: qdata,
  } = useSelector((state) => state.questManager);
  let { data } = useSelector((state) => state.authManager);
  // let {token,name,email} = data

  const [questDat, setQuestData] = useState([]);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(allQuest());
  }, []);

  useEffect(() => {
    setQuestData(qdata);
  }, [qdata]);

  useEffect(()=>{
    IntilizeData()
  },[IntilizeData()])
  return (
    <div style={{}}>
      <Header />

      <div className="apidiv">
        <Link to="/leaderboard">
          <div className="topdiv"></div>
        </Link>
      </div>
      <div className="diveff">
        <h1 style={{marginLeft:"0.7rem"}}>Live Quests</h1>
        <Grid
          justifyContent={"center"}
          alignItems={"center"}
          gap={"32px"}
          width={{
            base: FILL_PARENT,
            sm: FILL_PARENT,
            md: FILL_PARENT,
            lg: FILL_PARENT,
          }}
          margin={AUTO}
          mt={"16px"}
          mb={"100px"}
          gridTemplateColumns={{ base: R1, sm: R1, md: R2, lg: R3 }}
        >
          {questDat?.map((el) => (
            <QuestCard {...el} />
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default MyQuest;
