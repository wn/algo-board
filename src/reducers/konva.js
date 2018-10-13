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
      /** Conditionally add default local states for some shapes */
      switch(action.payload.structureName) {
        case "LLNode": {
          action.payload.shapeState = {
            ...action.payload.shapeState,
            shapeSourceX: 0,
            shapeSourceY: 0,
            lineEndX: 150,
            lineEndY: 35
          }
        }
      }
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

