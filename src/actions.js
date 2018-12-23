import { ADD_TASK, CAPTURE_INPUT, SET_INPUT } from "./actionTypes";

export function addTask(text) {
  return {
    type: ADD_TASK
  };
}

export function captureInput(text) {
  return {
    type: CAPTURE_INPUT,
    input: text
  };
}
