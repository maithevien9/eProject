import {createStore, combineReducers} from 'redux';

var dataLogin = {};

// var arrUser = [];

// var dataInforUser = {};

// const dataInforUserReducer = (state = dataInforUser, action) => {
//   if (action.type === 'dataInforUser') return action.data;
//   return state;
// };
const dataLoginReducer = (state = dataLogin, action) => {
  if (action.type === 'setDataLogin') return action.data;
  return state;
};

// const arrUserReducer = (state = arrUser, action) => {
//   if (action.type === 'SetData') return action.data;
//   return state;
// };
const reducer = combineReducers({
  //   arrUser: arrUserReducer,
  dataLogin: dataLoginReducer,
  //   dataInforUser: dataInforUserReducer,
});
const store = createStore(reducer);

export default store;
