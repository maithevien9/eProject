const NewRecyclablesAPI = async (Token, level) => {
  var url = 'http://10.10.50.62:8001/NewRecyclables';

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
