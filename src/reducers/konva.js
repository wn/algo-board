const initialState = {
  test: "test value"
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "TEST_ACTION": {
      console.log("test action triggered");
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}

