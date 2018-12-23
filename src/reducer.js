const initialState = {
  value: 0,
  tasks: [],
  input: ""
};

function addReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, state.input], input: "" };
    case "CAPTURE_INPUT":
      return { ...state, input: action.input };
    default:
      return state;
  }
}

export default addReducer;
