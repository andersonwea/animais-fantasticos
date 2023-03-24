const initBitcoin = () => {};
const btc = document.querySelector(".btc");

fetch("https://blockchain.info/ticker")
  .then((response) => response.json())
  .then((responseJSON) => {
    btc.innerText = (1000 / responseJSON.BRL.buy).toFixed(4);
  })
  .catch((error) => {
    console.log(Error(error));
  });
export default initBitcoin;
