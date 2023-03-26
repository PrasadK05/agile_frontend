import axios from "axios";
import { TASK_LOADING, TASK__ERROR, TASK__SUCCESS } from "./task.types";

export const taskSucc = (payload) => {
  return {
    type: TASK__SUCCESS,
    payload,
  };
};

export const taskFail = () => {
  return {
    type: TASK__ERROR,
  };
};

export const taskLoad = () => {
  return {
    type: TASK_LOADING,
  };
};

export const getTask = () => async (dispatch) => {
  let config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  dispatch(taskLoad);
  try {
    let res = await axios.get(
      "https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json",
      config
    );

    console.log(res);
  } catch (error) {
    console.log(error);
    dispatch(taskFail());
    return false;
  }
};
