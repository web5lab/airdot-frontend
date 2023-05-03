import {
  Button,
  Heading,
  Input,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
import { loginUser } from "../../redux/auth/auth.actions";
import Header from "../common/Header";
import Navbar from "../page3/NavbarQ";

const userObj = {
  email: "",
  password: "",
};

export default function LoginPage() {
  const toast = useToast();
  let nav = useNavigate();
  let dispatch = useDispatch();
  const [user, setUser] = useState(userObj);
  const { data, loading, error, isAuth } = useSelector(
    (state) => state.authManager
  );
  console.log(data);

  useEffect(() => {
    if (isAuth) {
      nav("/setup");
    }
  }, [isAuth]);

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  console.log(user);

  return (
    <VStack mt={"100px"}>
      <Header />

      <VStack
        gap={"10px"}
        w={{ base: FILL_90PARENT, sm: FILL_90PARENT, lg: FILL_40PARENT }}
        margin={{ base: "16px", sm: "16px", lg: AUTO }}
        padding= {"25px"}
        borderRadius= {"20px"}
        boxShadow= {"0px 6px 60px rgba(40, 97, 209, 0.4)"}
      >
        <Heading size={MEDIUM}>Welcome Back!</Heading>
        <Input
          bg={"#212121"}
          _placeholder={{ color: "#8F8F8F" }}
          margin={"16px"}
          padding={6}
          placeholder="Your Email"
          name="email"
          onChange={handleChange}
        ></Input>
        <Input
          bg={"#212121"}
          _placeholder={{ color: "#8F8F8F" }}
          margin={"16px"}
          padding={6}
          placeholder="Password"
          type="password"
          name="password"
          onChange={handleChange}
        ></Input>

        <Button
          padding={6}
          w={"328px"}
          isLoading={loading}
          border={"2px solid #ADC9FF"}
          borderRadius={"56px"}
          bg={"#2760D1"}
          onClick={() => {
            dispatch(loginUser(user, toast));
          }}
        >
          Sign In
        </Button>

        <Text color={"#8F8F8F"}>
          Don't have an account?{" "}
          <span
            style={{ color: "white", fontWeight: "bold", cursor: POINTER }}
            onClick={() => {
              nav("/signup");
            }}
          >
            Sign Up
          </span>
        </Text>
      </VStack>
    </VStack>
  );
}
