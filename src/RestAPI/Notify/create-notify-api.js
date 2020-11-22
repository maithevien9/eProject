const CreateNotifyAPI = async (Name, Detail, token) => {
  var url = 'http://10.10.50.62:8001/CreateNotify';

  return await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      Name: Name,
      Detail: Detail,
      token: token,
    }),
  }).then((response) => response.json());
};

export default CreateNotifyAPI;
