import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { LOGIN_API } from "../../apis/api";
import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "./auth.types";

export const loginUser = (obj, toast) => async (dispatch) => {
  dispatch({ type: LOGIN_LOADING });
  // console.log("my",obj)
  try {
    let res = await axios({
      method: "post",
      url: LOGIN_API(),
      data: obj,
    });
    console.log(res);
    if (res.data.status === 1) {
      console.log(res.data.message);
      toast({
        title: "User Sign in Successfull",
        position: "top",
        description: "",
        status: "success",
        duration: 2000,
        isClosable: true,
      });

      let user = {
        name: res.data.name || "",
        image: res.data.image || "",
        token: res.data.token || "",
        email: res.data.email || "",
      };
      sessionStorage.setItem("user", JSON.stringify(user));

      dispatch({ type: LOGIN_SUCCESS, payload: user });
    } else {
      toast({
        title: "Something went worng",
        position: "top",
        description: res.data.message,
        status: "error",
        duration: 2000,
        isClosable: true,
      });

      console.log(res.data.message);
      dispatch({ type: LOGIN_ERROR });
    }
  } catch (error) {
    toast({
      title: "Something went wrong",
      position: "top",
      description: error,
      status: "error",
      duration: 2000,
      isClosable: true,
    });

    console.log(error);
    dispatch({ type: LOGIN_ERROR });
  }
};
