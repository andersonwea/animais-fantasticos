const fetchBitcoin = (url, target) => {
  const btc = document.querySelector(target);

  fetch(url)
    .then((response) => response.json())
    .then((responseJSON) => {
      btc.innerText = (1000 / responseJSON.BRL.buy).toFixed(4);
    })
    .catch((error) => {
      console.log(Error(error));
    });
};
export default fetchBitcoin;
