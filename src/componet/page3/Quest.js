import React, { useEffect, useState } from "react";
import Navbar from "./NavbarQ";
import "./quest.css";
import QuestDataR from "./QuestDataR";
// import imag1 from "../images/Firebond/div-1.png";
// import imga2 from "../images/image3.png";
// import QuestDataL from "./QuestDataL";
import { TaskCard } from "../utility/TaskCard";
import { Flex, VStack } from "@chakra-ui/react";
import {
  COLUMN,
  FILL_70PARENT,
  FILL_PARENT,
  ROW,
} from "../../constants/typography";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import { GET_ONE_QUEST } from "../../apis/api";
import Header from "../common/Header";
import { IntilizeData } from "../../services/connectWallet";
// import { useSelector } from "react-redux";

function Quest() {
  const [data, setData] = useState([]);
  const [TaskData, setTaskData] = useState()
  let params = useParams();
  let { id } = params;
  let [loading, setLoading] = useState(false);

  var y=localStorage.getItem("points");
  const [xp, setxp] = useState(y);
  useEffect(() => {
    var y=localStorage.getItem("points");
    setxp(y);
    const getData = async () => {
      setLoading(true);
      let res = await axios({
        method: "get",
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("jwtToken")}`
        },
        url: GET_ONE_QUEST(id),
      });
      
      setData([res.data.data]);
      setTaskData(res.data.task);
      setLoading(false);
    };

    getData();
  }, []);


  return data.length > 0 ? (
    <VStack padding={{ base: "16px" }} marginTop="100px" w={FILL_PARENT}>
      <Header />
      <Flex
        w={{ base: FILL_PARENT, sm: FILL_PARENT, lg: FILL_70PARENT }}
        direction={{ base: COLUMN, sm: COLUMN, md: COLUMN, lg: ROW }}
        bg={"transparent"}
        gap={"32px"}
      >
        <QuestDataR
          imgsrc={data[0].cimage}
          imgsrc2={data[0].cimage}
          hname={data[0].cname}
          name={data[0].cname}
          link={"/Quest/" + data[0]._id}
          pname={data[0].name}
          xppoints={data[0].tokens}
          task={data[0].task.split("|").length}
          ttask="5"
          likes="687"
          para1={data[0].description}
          para2="Follow Twitter, subscribe to the Newsletter and share with your
                        frens on Twitter to get Cryptocity NFT Wall 
                        proof and a chance to win from $100 raffle"
        />

        <VStack className="down" w={FILL_PARENT} alignItems="flex-start">
{/* {xp > 0 ? (
        <span style={{display:"flex",width:FILL_PARENT,justifyContent:"right"}}>{xp}Xp</span>
      ) : (
        <span></span>
      )} */}
        
        <Flex  w={FILL_PARENT} style={{
            display:"flex",
            justifyContent:"space-between"
          }}>
            <p>Your tasks</p>
            

          </Flex>
          {TaskData.split("|").map((el) => (
            <TaskCard task={el.trim()}   xppoints={TaskData} questId={data[0]._id} />
          ))}
        </VStack>
      </Flex>
    </VStack>
  ) : (
    ""
  );
}

export default Quest;
