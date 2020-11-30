const GetHistoryScore = async (Token) => {
  var url = `http://192.168.1.8:8001/GetHistoryScore/${Token}`;
  return await fetch(url).then((response) => response.json());
};

export default GetHistoryScore;
