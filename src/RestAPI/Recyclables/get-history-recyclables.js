const GetHistoryRecyclablesAPI = async (Token) => {
  var url = `http://192.168.1.8:8001/GetHistoryRecyclables/${Token}`;
  return await fetch(url).then((response) => response.json());
};

export default GetHistoryRecyclablesAPI;
