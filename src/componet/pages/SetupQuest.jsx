import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  Text,
  Textarea,
  useDisclosure,
  useToast,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import {
  ABSOLUTE,
  AUTO,
  BLUE,
  COLUMN,
  DEEPSKYBLUE,
  FILL_40PARENT,
  FILL_50PARENT,
  FILL_70PARENT,
  FILL_90PARENT,
  FILL_PARENT,
  FIXED,
  GREEN,
  LARGE,
  MEDIUM,
  POINTER,
  ROW,
  SB,
  WHITE,
} from "../../constants/typography";
import Navbar from "../page3/NavbarQ";
import { AiOutlinePlusCircle } from "react-icons/ai";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateTask } from "../utility/CreateTask";
import axios from "axios";
import { CREATE_QUEST } from "../../apis/api";
import { createQuest, getQuest } from "../../redux/quest/quest.actions";
import { AiOutlinePoweroff } from "react-icons/ai";
import QuestItem from "../utility/QuestItem/QuestItem";
import { LOGOUT } from "../../redux/auth/auth.types";
import Header from "../common/Header";
const questObj = {
  name: "",
  edate: "",
  sdate: "",
  cimage: "",
  cname: "",
  task: "",
  cemail: "",
  description: "",
  tokens: "",
  now: "",
  sub: "",
};
export default function SetupQuest() {
  let { data } = useSelector((state) => state.authManager);
  let {
    loading: qloading,
    error: qerror,
    data: qdata,
  } = useSelector((state) => state.questManager);
  let { name, email, token, image } = data;
  console.log(token);
  let dispatch = useDispatch();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tasks, setTasks] = useState([]);

  let nav = useNavigate();
  const [myquest, setMyquest] = useState(questObj);
  const toast = useToast();
  const [loading, setLaoding] = useState(false);

  const handleChange = (e) => {
    setMyquest((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const [questData, setQuestData] = useState([]);
  useEffect(() => {
    dispatch(getQuest(token));
  }, []);

  useEffect(() => {
    setQuestData(qdata);
  }, [qdata]);

  console.log(questData);

  return (
    <Box position={FIXED} h={"100vh"} mt={"100px"} w={FILL_PARENT}>
      <Header />

      <Flex
        gap={4}
        padding={"0px 50px"}
        w={FILL_PARENT}
        justifyContent={"flex-end"}
      >
        <Button
          borderRadius={"50px"}
          bg={"white"}
          color={"black"}
          leftIcon={<Image w={"20px"} src={image} />}
        >
          {name}
        </Button>
        <Button
          variant={"outline"}
          borderRadius={"50px"}
          color={"white"}
          rightIcon={<AiOutlinePoweroff color="white" />}
          onClick={() => {
            dispatch({ type: LOGOUT });
          }}
        >
          Logout
        </Button>
      </Flex>

      <>
        <Button
          position={ABSOLUTE}
          padding={8}
          zIndex={100}
          borderRadius={"50px"}
          bg={"#2760D1"}
          rightIcon={<AiOutlinePlusCircle size={24} onClick={""} />}
          bottom={150}
          right={10}
          onClick={onOpen}
        >
          Setup Up New Quest
        </Button>
        <Modal size={"full"} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent bg="black">
            <ModalHeader>Create new Quest</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack
                gap={"10px"}
                w={{
                  base: FILL_90PARENT,
                  sm: FILL_90PARENT,
                  lg: FILL_40PARENT,
                }}
                margin={{ base: "16px", sm: "16px", lg: AUTO }}
              >
                {/* <Heading size={MEDIUM}></Heading> */}
                <Flex
                  gap={4}
                  w={FILL_PARENT}
                  alignItems="center"
                  justifyContent={SB}
                  direction={{ base: COLUMN, sm: COLUMN, md: ROW, lg: ROW }}
                >
                  <VStack w={FILL_PARENT}>
                    <Text>Start date</Text>
                    <Input
                      border={"none"}
                      bg={"#212121"}
                      _placeholder={{ color: "#8F8F8F" }}
                      margin={"16px"}
                      padding={6}
                      placeholder=""
                      name="sdate"
                      type={"date"}
                      onChange={handleChange}
                    ></Input>
                  </VStack>
                  <VStack w={FILL_PARENT}>
                    <Text>End date</Text>
                    <Input
                      border={"none"}
                      bg={"#212121"}
                      _placeholder={{ color: "#8F8F8F" }}
                      margin={"16px"}
                      padding={6}
                      placeholder=""
                      name="edate"
                      type={"date"}
                      onChange={handleChange}
                    ></Input>
                  </VStack>
                </Flex>

                <Input
                  border={"none"}
                  bg={"#212121"}
                  _placeholder={{ color: "#8F8F8F" }}
                  margin={"16px"}
                  padding={6}
                  placeholder="Quest name"
                  name="name"
                  onChange={handleChange}
                ></Input>
                <Textarea
                  border={"none"}
                  bg={"#212121"}
                  _placeholder={{ color: "#8F8F8F" }}
                  margin={"16px"}
                  padding={6}
                  placeholder="Quest Description"
                  name="description"
                  onChange={handleChange}
                ></Textarea>
                <Input
                  border={"none"}
                  bg={"#212121"}
                  _placeholder={{ color: "#8F8F8F" }}
                  margin={"16px"}
                  padding={6}
                  placeholder="Quest Sub heading"
                  name="sub"
                  onChange={handleChange}
                ></Input>
                <VStack alignItems={"flex-start"} w={FILL_PARENT}>
                  <Text>$Tokens</Text>
                  <Input
                    border={"none"}
                    bg={"#212121"}
                    _placeholder={{ color: "#8F8F8F" }}
                    margin={"16px"}
                    padding={6}
                    placeholder="Quest Tokens"
                    type={"number"}
                    name="tokens"
                    onChange={handleChange}
                  ></Input>
                </VStack>
                <Input
                  border={"none"}
                  bg={"#212121"}
                  _placeholder={{ color: "#8F8F8F" }}
                  margin={"16px"}
                  padding={6}
                  placeholder="Number of winners"
                  type={"number"}
                  name="now"
                  onChange={handleChange}
                ></Input>

                {tasks.map((el) => (
                  <Wrap padding={"0px 8px"}>{el.split("~").join(" - ")}</Wrap>
                ))}

                <CreateTask setTasks={setTasks} />
              </VStack>
            </ModalBody>

            <ModalFooter>
              <Button variant="ghost" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button
                colorScheme="blue"
                onClick={async () => {
                  let quest = {
                    ...myquest,
                    task: tasks.join("|"),
                    cname: name,
                    cimage: image,
                    cemail: email,
                  };
                  console.log(quest);
                  // console.log("creating...")
                  dispatch(createQuest(quest, token, toast, onClose));
                }}
              >
                Create
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>

      <VStack
        className="dbody"
        height="70%"
        overflow="auto"
        w={{
          base: FILL_90PARENT,
          sm: FILL_90PARENT,
          md: FILL_90PARENT,
          lg: FILL_50PARENT,
        }}
        m={AUTO}
        mt={"50px"}
      >
        {questData.map((el) => (
          <QuestItem {...el} data={data} />
        ))}
      </VStack>
    </Box>
  );
}
