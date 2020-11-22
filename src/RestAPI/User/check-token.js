const CheckToken = async (Token) => {
  var url = `http://10.10.50.62:8001/CheckLogin/${Token}`;
  return await fetch(url).then((response) => response.json());
};

export default CheckToken;
