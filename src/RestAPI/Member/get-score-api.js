const GetScore = async (Token) => {
  var url = `http://192.168.1.3:8001/GetScore/${Token}`;
  return await fetch(url).then((response) => response.json());
};

export default GetScore;
