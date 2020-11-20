const NewRecyclablesAPI = async (Token, level) => {
  var url = 'http://192.168.1.3:8001/NewRecyclables';

  return await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: Token,
      IDlevel: level,
    }),
  }).then((response) => response.json());
};

export default NewRecyclablesAPI;
