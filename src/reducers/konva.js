const initialState = {
  dataStructures: {},
  associations: {
    pointingTo: {},
    pointingFrom: {}
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
    case 'ADD_STRUCTURE': {
      /** Conditionally add default local states for some shapes */
      switch (action.payload.structureName) {
        case 'LLNode': {
          action.payload.shapeState = {
            ...action.payload.shapeState,
            shapeSourceX: 0,
            shapeSourceY: 0,
            lineEndX: 150,
            lineEndY: 35,
            text: "null"
          };
        }
        case 'Pointer': {
          action.payload.shapeState = {
            ...action.payload.shapeState,
            shapeSourceX: 0,
            shapeSourceY: 0,
            lineEndX: 150,
            lineEndY: 150
          };
        }
        case 'Hashtable': {
          action.payload.shapeState = {
            ...action.payload.shapeState,
            shapeSourceX: 50,
            shapeSourceY: 50
          };
        }
        case 'GraphList': {
          action.payload.shapeState = {
            ...action.payload.shapeState,
            shapeSourceX: 150,
            shapeSourceY: 150,
            lineEndX: 150,
            lineEndY: 150
          };
        }
      }
      return {
        ...state,
        dataStructures: {
          ...state.dataStructures,
          [action.payload.id]: {
            ...(action.payload.shapeState || {}),
            structureName: action.payload.structureName,
            shapeSourceX: 10,
            shapeSourceY: 10
          }
        },
        associations: {
          pointingTo: {
            ...state.associations.pointingTo,
            [action.payload.id]: {}
          },
          pointingFrom: {
            ...state.associations.pointingFrom,
            [action.payload.id]: {}
          }
        }
      };
    }
    /**
     * id - the unique identifier for this shape
     * shapeState - an object, possibly undefined, containing any number of properties
     */
    case 'UPDATE_SHAPE_STATE': {
      return {
        ...state,
        dataStructures: {
          ...state.dataStructures,
          [action.payload.id]: {
            ...state.dataStructures[action.payload.id],
            ...(action.payload.shapeState || {})
          }
        }
      };
    }
    case 'CONNECT_NODES': {
      const { source, dest } = action.payload;
      return {
        ...state,
        associations: {
          pointingTo: {
            ...state.associations.pointingTo,
            [dest]: {
              ...state.associations.pointingTo[dest],
              [source]: true
            }
          },
          pointingFrom: {
            ...state.associations.pointingFrom,
            [source]: {
<<<<<<< HEAD
              ...state.associations.pointingFrom[source],
              [dest]: true
=======
              [dest]: true,
>>>>>>> Add arrows for graph nodes
            }
          }
        }
      };
    }
    default:
      return state;
  }
}
