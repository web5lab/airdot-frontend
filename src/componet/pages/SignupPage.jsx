import {
  Button,
  Heading,
  Input,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { REGISTER_API } from "../../apis/api";
import {
  AUTO,
  FILL_40PARENT,
  FILL_50PARENT,
  FILL_90PARENT,
  FILL_PARENT,
  MEDIUM,
  POINTER,
  SMALL,
} from "../../constants/typography";
import Header from "../common/Header";
import Navbar from "../page3/NavbarQ";

const userObj = {
  name: "",
  email: "",
  password: "",
  contact: "",
  role: "",
  totalq: "",
  points: "",
};

export default function SignupPage() {
  let nav = useNavigate();
  const [user, setUser] = useState(userObj);
  const image = useRef(null);
  const toast = useToast();
  const [loading, setLaoding] = useState(false);

  const handleChange = (e) => {
    if (e.target.type != "file") {
      setUser((prev) => {
        return { ...prev, [e.target.name]: e.target.value };
      });
    }
  };

  console.log(user);
  return (
    <VStack mt={"100px"}  >
      <Header />

      <VStack 
              padding= {"25px"}
              borderRadius= {"20px"}
              boxShadow= {"0px 6px 60px rgba(40, 97, 209, 0.4)"}
        gap={"10px"}
        w={{ base: FILL_90PARENT, sm: FILL_90PARENT, lg: FILL_40PARENT }}
        margin={{ base: "16px", sm: "16px", lg: AUTO }}
      >
        <Heading size={MEDIUM}>Sign Up with Winterfuel</Heading>
        <Input
          border={"none"}
          bg={"#212121"}
          _placeholder={{ color: "#8F8F8F" }}
          margin={"16px"}
          padding={6}
          placeholder="Your Name eg: Individual/Company"
          name="name"
          onChange={handleChange}
        ></Input>
        <Input
          border={"none"}
          bg={"#212121"}
          _placeholder={{ color: "#8F8F8F" }}
          margin={"16px"}
          padding={6}
          placeholder="Your Email"
          name="email"
          onChange={handleChange}
        ></Input>
        <Input
          border={"none"}
          bg={"#212121"}
          type="password"
          _placeholder={{ color: "#8F8F8F" }}
          margin={"16px"}
          padding={6}
          placeholder="Password"
          name="password"
          onChange={handleChange}
        ></Input>
        <Input
          border={"none"}
          bg={"#212121"}
          _placeholder={{ color: "#8F8F8F" }}
          margin={"16px"}
          padding={6}
          placeholder="Contact Details any link of Social Media"
          name="contact"
          onChange={handleChange}
        ></Input>
        <label htmlFor="">Choose Avatar for your Company</label>

        <Input
          type={"file"}
          ref={image}
          border={"none"}
          margin={"16px"}
          padding={6}
          name="image"
        ></Input>
        <Button
          padding={6}
          isLoading={loading}
          w={"328px"}
          border={"2px solid #ADC9FF"}
          borderRadius={"56px"}
          bg={"#2760D1"}
          onClick={async () => {
            const formData = new FormData();
            for (let key in user) {
              formData.append(key, user[key]);
            }
            formData.append("image", image.current.files[0]);

            if (
              formData.get("name") == "" ||
              formData.get("email") == "" ||
              formData.get("password") == "" ||
              formData.get("contact") == ""
            ) {
              toast({
                title: "Invalid Details",
                position: "top",
                description: "Please enter all details",
                status: "error",
                duration: 2000,
                isClosable: true,
              });
              return;
            }

            if (image.current.files[0] == undefined) {
              toast({
                title: "No Avatar Found",
                position: "top",
                description: "Please add your Logo",
                status: "error",
                duration: 2000,
                isClosable: true,
              });
              return;
            }

            // to print form data
            // for (const [key, value] of formData.entries()) {
            //     console.log(key, value);
            //   }
            setLaoding(true);
            let res = await axios({
              method: "post",
              url: REGISTER_API(),
              data: formData,
            });
            if (res.data.status == 1) {
              toast({
                title: "User Sign up Successfull",
                position: "top",
                description: "Sign in into your acccount",
                status: "success",
                duration: 2000,
                isClosable: true,
              });
              nav("/login");
              console.log("User Regsitered");
              setLaoding(false);
            } else {
              console.log("Something went wrong: " + res.message);
              toast({
                title: "Something went wrong",
                position: "top",
                description: res.data.message,
                status: "error",
                duration: 2000,
                isClosable: true,
              });
              setLaoding(false);
            }
          }}
        >
          Sign Up
        </Button>

        <Text color={"#8F8F8F"}>
          Already have an account?{" "}
          <span
            style={{ color: "white", fontWeight: "bold", cursor: POINTER }}
            onClick={() => {
              nav("/login");
            }}
          >
            Sign in
          </span>
        </Text>
      </VStack>
    </VStack>
  );
}
