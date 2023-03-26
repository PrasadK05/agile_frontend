import { TASK_LOADING, TASK__ERROR, TASK__SUCCESS } from "./task.types";

export const InitalState = {
  loading: false,
  task: [],
  error: false,
};

export const taskReducer = (state = InitalState, action) => {
  switch (action.type) {
    case TASK__SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        task: action.payload,
      };
    }

    case TASK__ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
        task: [],
      };
    }
    case TASK_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
        task: [],
      };
    }

    default: {
      return state;
    }
  }
};
