import {createStore, combineReducers} from 'redux';

var dataLogin = {};
var Scores = 0;
var dataNotify = [];
const dataLoginReducer = (state = dataLogin, action) => {
  if (action.type === 'setDataLogin') return action.data;
  return state;
};
const dataNotifyReducer = (state = dataNotify, action) => {
  if (action.type === 'setdataNotify') return action.data;
  return state;
};
const ScoresReducer = (state = Scores, action) => {
  if (action.type === 'setScore') {
    return action.data;
  }
  if (action.type === 'MinusPoints') {
    return state - action.data;
  }
  return state;
};

// const arrUserReducer = (state = arrUser, action) => {
//   if (action.type === 'SetData') return action.data;
//   return state;
// };
const reducer = combineReducers({
  dataLogin: dataLoginReducer,
  Scores: ScoresReducer,
  dataNotify: dataNotifyReducer,
});
const store = createStore(reducer);

export default store;
