const configureStore = require("@reduxjs/toolkit").configureStore;
//const reduxLogger = require("redux-logger");
const cakeReducer = require("../features/cake/cakeSlice");
const icecreamReducer = require("../features/icecream/icecreamSlice");
const useReducer = require("../features/user/userSlice");

//const logger = reduxLogger.createLogger(); //

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: useReducer,
  },
  // middleware: (getdefaultMiddleware) => getdefaultMiddleware().concat(logger)s
});

module.exports = store;
