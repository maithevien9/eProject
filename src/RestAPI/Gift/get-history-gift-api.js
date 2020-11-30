const GetHistorygift = async (Token) => {
  var url = `http://192.168.1.8:8001/GetHistory/${Token}`;
  return await fetch(url).then((response) => response.json());
};

export default GetHistorygift;
//{Token}
