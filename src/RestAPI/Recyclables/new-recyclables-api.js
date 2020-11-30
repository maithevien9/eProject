const NewRecyclablesAPI = async (Token, level, CreateAtTime) => {
  var url = 'http://192.168.1.8:8001/NewRecyclables';

  return await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: Token,
      IDlevel: level,
      CreateAtTime: CreateAtTime,
    }),
  }).then((response) => response.json());
};

export default NewRecyclablesAPI;
