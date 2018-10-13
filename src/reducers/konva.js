const initialState = {
  dataStructures: {},
  associations: {
    pointingTo: {},
    pointingFrom: {},
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "ADD_STRUCTURE": {
      return {
        ...state,
        dataStructures: {
          ...state.dataStructures,
          [action.payload.id]: {
            structureName: action.payload.structureName,
            x: 10,
            y: 10,
          }
        },
        associations: {
          pointingTo: {
            ...state.associations.pointingTo,
            [action.payload.id]: {},
          },
          pointingFrom: {
            ...state.associations.pointingFrom,
            [action.payload.id]: {},
          }
        }
      };
    }
    default:
      return state;
  }
}

