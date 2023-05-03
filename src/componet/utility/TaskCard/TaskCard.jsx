import {
  Badge,
  Button,
  Card,
  CardBody,
  Flex,
  HStack,
  Text,
  VStack,
  Stack,
  Checkbox,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FiTwitter } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineCheckCircle, AiOutlineYoutube } from "react-icons/ai";
import { RxDiscordLogo } from "react-icons/rx";
import { BiLink } from "react-icons/bi";

import {
  AUTO,
  FILL_60PARENT,
  FILL_80PARENT,
  FILL_PARENT,
  POINTER,
  SB,
  YELLOW,
} from "../../../constants/typography";
import "./task.css";
import { Link } from "react-router-dom";
import { inherits } from "@babel/types";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { IntilizeData } from "../../../services/connectWallet";
import axios from "axios";
import twitteAuth from "../../../services/twitterAuth";
import verifyTask from "../../../services/questService";
import DiscordAuth from "../../../services/discordAuth";

export default function TaskCard({ task, xppoints, questId }) {
  console.log(xppoints);
  console.log("quest id is", questId);
  console.log("data from parent module", task);
  const [taskLogger, settaskLogger] = useState();
  const { connectionStatus } = useSelector((state) => state.userManager);
  const [userTask, setuserTask] = useState(task)
  const [expanded, setExpanded] = useState(false);
  var y = localStorage.getItem("points");
  const [xp, setxp] = useState(y);

  const [down, setDown] = useState(false);
  const [taskStatus, settaskStatus] = useState(false);
   

  const Task = userTask.split("~");
  const icon = Task[0].toLowerCase();
  console.log("task", Task);
  useEffect(() => {
    y = localStorage.getItem("points");

    setxp(y);
    console.log("taskcard value points local", xp, y);
  }, []);
  const connectWalletAlert = async () => {
    if (!connectionStatus) {
      return alert("wallet is not connected");
    }
  };
  const taskController = async(taskType)=>{
   if (taskType==="twitter") {
    const data =await twitteAuth(questId,task);
    if(!data.error){
      setDown(true)
    setExpanded(false);
    setuserTask(data.task)
    }
    
   } else if (taskType==="discord") {
   
   const data = await DiscordAuth(questId,task)
   if(!data.error){
    setDown(true)
  setExpanded(false);
  setuserTask(data.task)
  }
   }else{
    const data = await verifyTask(questId,task)
    setDown(true)
    setExpanded(false);
    setuserTask(data.task)
   }
  }

  return (
    <>
      <Card
        bg={"#1A1D1F"}
        w={FILL_PARENT}
        className={expanded ? "downslide" : "upslide"}
        borderRadius={"16px"}
        padding={0}
        marginTop="10px"
      >
        <CardBody w={FILL_PARENT}>
          <VStack w={FILL_PARENT}>
            <Flex justifyContent={SB} w={FILL_PARENT}>
              <HStack>
                {icon.includes("twitter") ? (
                  <FiTwitter color="#0EA5E9" />
                ) : icon.includes("youtube") ? (
                  <AiOutlineYoutube color="red" />
                ) : icon.includes("discord") ? (
                  <RxDiscordLogo color="#5865F2" />
                ) : icon.includes("instagram") ? (
                  <RxDiscordLogo color="#F52887" />
                ) : (
                  <BiLink color="#10B981" />
                )}

                <Text margin={0} color={"#E6E6E6"}>
                  {" "}
                  <Link to={task.split("~")[1]} target="_blank">
                    {" "}
                    {task.split("~")[0]}
                  </Link>
                </Text>
              </HStack>

              <HStack>
                {taskStatus || Task[3] === "completed" ? (
                  <BsFillCheckCircleFill color="green" id="check_box" />
                ) : (
                  <icon></icon>
                )}
                <Badge
                  m={0}
                  textTransform="lowercase"
                  fontWeight={"5000"}
                  borderRadius="20px"
                  autoCapitalize="false"
                  colorScheme={YELLOW}
                >
                  {userTask.split("~")[2]} xp
                </Badge>

                {Task[3] !== "completed" ? (
                  <IoIosArrowDown
                    size={16}
                    color="#0EA5E9"
                    style={{
                      cursor: POINTER,
                      transform: down ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s",
                    }}
                    onClick={() => {
                      setExpanded((prev) => !prev);
                      setDown((prev) => !prev);
                    }}
                  />
                ) : (
                  <span></span>
                )}
              </HStack>
            </Flex>
            {/* <Flex w={FILL_PARENT} alignItems={"flex-start"}>
            {" "}
            <span style={{ display: expanded ? "block" : "none" }}>
              {"-> "}
              {task.split("~")[2]}
            </span>
          </Flex> */}
            {localStorage.getItem("address") ? (
              <Button
                variant={"outline"}
                display={expanded ? "block" : "none"}
                borderColor={"#0EA5E9"}
                padding={"0px 32px"}
                borderRadius={"50px"}
                fontWeight={"5000"}
                color={"#0EA5E9"}
                onClick={icon.includes("twitter") ? ()=>{taskController("twitter") }:icon.includes("discord") ?()=>taskController("discord"):()=>{taskController("verify task")}}
              >
                Verify
              </Button>
            ) : (
              <Button
                variant={"outline"}
                display={expanded ? "block" : "none"}
                borderColor={"#0EA5E9"}
                padding={"0px 32px"}
                borderRadius={"50px"}
                fontWeight={"5000"}
                color={"#0EA5E9"}
                onClick={connectWalletAlert}
              >
                connect wallet
              </Button>
            )}
          </VStack>
        </CardBody>
      </Card>
    </>
  );
}
