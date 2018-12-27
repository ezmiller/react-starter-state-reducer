export const initialState = {
  name: ""
};

const stateReducer = (state, changes) => {
  if (changes.type === "updateName") {
    return {
      ...state,
      name: changes.name
    };
  }

  // Remember to return original state by default
  return state;
};

export default stateReducer;
