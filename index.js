const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = " ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = " ICECREAM_RESTOCKED";

function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}

function orderIceCream(qty = 1) {
  return {
    type: ICECREAM_ORDERED,
    payload: qty,
  };
}

function restockIceCream(qty = 1) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
}

// const initalState = {
//   numOfcakes: 10,
//   numOfIceCreams: 20,
// };

const initialCakeState = {
  numOfcakes: 10,
};

const initialIceCreamState = {
  numOfIceCreams: 20,
};

//(previousState, action) =>newState

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state, //use the spread operator when the state has more than one object as its initial property
        numOfcakes: state.numOfcakes - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfcakes: state.numOfcakes + action.payload,
      };

    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state, //use the spread operator when the state has more than one object as its initial property
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(3));

const actions = bindActionCreators(
  { orderCake, restockCake, orderIceCream, restockIceCream },
  store.dispatch
);
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(3);
actions.orderIceCream();
actions.orderIceCream();
actions.restockIceCream(2);

unsubscribe();
