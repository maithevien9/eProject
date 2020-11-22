const CreateHistoryScore = async (token, IDGift, PriceGift) => {
  var url = 'http://10.10.50.62:8001/CreateHistory';

  return await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: token,
      IDGift: IDGift,
      PriceGift: PriceGift,
    }),
  }).then((response) => response.json());
};

export default CreateHistoryScore;
