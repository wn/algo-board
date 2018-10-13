const initialState = {
  dataStructures: {},
  associations: {
    pointingTo: {},
    pointingFrom: {},
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    /**
     * id - the unique identifier for this shape
     * structureName - the name of the Shape to render
     * shapeState - an object, possibly undefined, containing any number of properties
     * x - the x-coord
     * y - the y-coord
     */
    case "ADD_STRUCTURE": {
      return {
        ...state,
        dataStructures: {
          ...state.dataStructures,
          [action.payload.id]: {
            ...(action.payload.shapeState || {}),
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

