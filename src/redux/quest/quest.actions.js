import axios from "axios";
import {
  ALL_QUEST,
  CREATE_QUEST,
  DELETE_QUEST,
  GET_ALL_QUEST,
  UPDATE_QUEST,
} from "../../apis/api";
import {
  CREATE_QUEST_ERROR,
  CREATE_QUEST_LOADING,
  CREATE_QUEST_SUCCESS,
  DELETE_QUEST_ERROR,
  DELETE_QUEST_SUCCESS,
  GET_QUEST_ERROR,
  GET_QUEST_LOADING,
  GET_QUEST_SUCCESS,
  UPDATE_QUEST_ERROR,
  UPDATE_QUEST_LOADING,
  UPDATE_QUEST_SUCCESS,
} from "./quest.types";

export const allQuest = (token) => async (dispatch) => {
  dispatch({ type: GET_QUEST_LOADING });
  try {
    let res = await axios({
      method: "get",
      url: ALL_QUEST(),
    });
    if (res.data.status === 1) {
      console.log(res);
      dispatch({ type: GET_QUEST_SUCCESS, payload: res.data.data });
    } else {
      dispatch({ type: GET_QUEST_ERROR });
    }
  } catch (error) {
    dispatch({ type: GET_QUEST_ERROR });
  }
};
export const getQuest = (token) => async (dispatch) => {
  dispatch({ type: GET_QUEST_LOADING });
  try {
    let res = await axios({
      method: "get",
      url: GET_ALL_QUEST(),
      headers: {
        Authorization: token,
      },
    });
    if (res.data.status === 1) {
      console.log(res);
      dispatch({ type: GET_QUEST_SUCCESS, payload: res.data.data });
    } else {
      dispatch({ type: GET_QUEST_ERROR });
    }
  } catch (error) {
    dispatch({ type: GET_QUEST_ERROR });
  }
};

export const createQuest = (obj, token, toast, onClose) => async (dispatch) => {
  dispatch({ type: CREATE_QUEST_LOADING });
  try {
    let res = await axios({
      method: "post",
      url: CREATE_QUEST(),
      headers: {
        Authorization: token,
      },
      data: obj,
    });
    if (res.data.status === 1) {
      toast({
        title: "Quest Created",
        position: "top",
        description: "",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      dispatch({ type: CREATE_QUEST_SUCCESS });
      dispatch(getQuest(token));
      onClose();
    } else {
      toast({
        title: "Something went wrong",
        position: "top",
        description: res.data.message,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      dispatch({ type: CREATE_QUEST_ERROR });
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
    dispatch({ type: CREATE_QUEST_ERROR });
  }
};

export const updateQuest = (token, id, toast) => async (dispatch) => {
  dispatch({ type: UPDATE_QUEST_LOADING });
  try {
    let res = await axios({
      method: "patch",
      url: UPDATE_QUEST(id),
      headers: {
        Authorization: token,
      },
    });
    if (res.data.status === 1) {
      toast({
        title: "Quest updated",
        position: "top",
        description: "",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      dispatch({ type: UPDATE_QUEST_SUCCESS });
      dispatch(getQuest(token));
    } else {
      toast({
        title: "Something went wrong",
        position: "top",
        description: res.data.message,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      dispatch({ type: UPDATE_QUEST_ERROR });
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
    dispatch({ type: UPDATE_QUEST_ERROR });
  }
};

export const deleteQuest = (token, id, toast) => async (dispatch) => {
  dispatch({ type: UPDATE_QUEST_LOADING });
  try {
    let res = await axios({
      method: "delete",
      url: DELETE_QUEST(id),
      headers: {
        Authorization: token,
      },
    });
    if (res.data.status === 1) {
      toast({
        title: "Quest deleted",
        position: "top",
        description: "",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      dispatch({ type: DELETE_QUEST_SUCCESS });
      dispatch(getQuest(token));
    } else {
      toast({
        title: "Something went wrong",
        position: "top",
        description: res.data.message,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      dispatch({ type: DELETE_QUEST_ERROR });
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
    dispatch({ type: DELETE_QUEST_ERROR });
  }
};
