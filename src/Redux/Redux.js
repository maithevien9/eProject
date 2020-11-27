import {createStore, combineReducers} from 'redux';

var dataLogin = {};
var Scores = 0;
var dataNotify = [];
var historyGift = [];
var historyScore = [];
var HistoryRecyclables = [];
var InforUser = {};
var dataCheckLocal = false;
var ZoomX = 15;
var ZoomY = 15;
const ZoomXRedycer = (state = ZoomX, action) => {
  if (action.type === 'setZoomX') return action.data;
  return state;
};
const ZoomYRedycer = (state = ZoomY, action) => {
  if (action.type === 'setZoomY') return action.data;
  return state;
};
const HistoryRecyclablesReducer = (state = HistoryRecyclables, action) => {
  if (action.type === 'HistoryRecyclables') return action.data;
  return state;
};
const dataLoginReducer = (state = dataLogin, action) => {
  if (action.type === 'setDataLogin') return action.data;
  return state;
};
const historyScoreReducer = (state = historyScore, action) => {
  if (action.type === 'historyScore') return action.data;
  return state;
};
const historyGiftReducer = (state = historyGift, action) => {
  if (action.type === 'historyGift') return action.data;
  return state;
};
const InforUserReducer = (state = InforUser, action) => {
  if (action.type === 'setInforUser') return action.data;
  return state;
};
const dataCheckLocalReducer = (state = dataCheckLocal, action) => {
  if (action.type === 'setdataCheckLocal') return action.data;
  return state;
};
const dataNotifyReducer = (state = dataNotify, action) => {
  if (action.type === 'setdataNotify') return action.data;
  if (action.type === 'addNotify') {
    let ts = Date.now();

    let date_ob = new Date(ts);
    let date = date_ob.getDate();
    let month = date_ob.getMonth() + 1;
    let year = date_ob.getFullYear();

    var hour = date_ob.getHours();
    var min = date_ob.getMinutes();
    var sec = date_ob.getSeconds();

    // console.log(
    //   year + '-' + month + '-' + date + ' ' + hour + ':' + min + ':' + sec,
    // );
    var dateTime =
      year + '-' + month + '-' + date + ' ' + hour + ':' + min + ':' + sec;
    console.log(dateTime);
    return [
      {
        ID: Math.random().toString(36).substr(2, 9),
        Name: action.Name,
        Detail: '',
        IDUser: action.IDUser,
        CreateAtTime: dateTime,
      },
    ].concat(state);
  }
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
  historyGift: historyGiftReducer,
  historyScore: historyScoreReducer,
  HistoryRecyclables: HistoryRecyclablesReducer,
  InforUser: InforUserReducer,
  dataCheckLocal: dataCheckLocalReducer,
  ZoomX: ZoomXRedycer,
  ZoomY: ZoomYRedycer,
});
const store = createStore(reducer);

export default store;
