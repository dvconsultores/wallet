const Web3 = require('web3');


//create wallet
const createWallet = () => {
    const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io'));
    let account = web3.eth.accounts.create(web3.utils.randomHex(32));
    let wallet = web3.eth.accounts.wallet.add(account);
    let keystore = 'cVvwY3v4AegKAJiagGRVUg9dgTrYbMj1nssJVomTXECeGhmMTCVo';
    console.log({
        account: account,
        wallet: wallet,
        keystore: keystore
    });
};


//check bakance
const getBalance = () => {
const web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/00e81765df6541ab941d241d132827be"))
web3.eth.getBalance("0x97fea03141830c07b789B58bf9AA516ca2633e52", function(err, result) {
  if (err) {
    console.log(err)
  } else {
    console.log(web3.utils.fromWei(result, "ether") + " ETH")
  }
})
};


async function sendeth() {
  // Configuring the connection to an Ethereum node
  const network = process.env.ETHEREUM_NETWORK;
  const web3 = new Web3(
    new Web3.providers.HttpProvider(
      `https://${network}.infura.io/v3/${process.env.INFURA_PROJECT_ID}`
    )
  );
  // Creating a signing account from a private key
  const signer = web3.eth.accounts.privateKeyToAccount(
    process.env.SIGNER_PRIVATE_KEY
  );
  web3.eth.accounts.wallet.add(signer);
  // Creating the transaction object
  const tx = {
    from: signer.address,
    to: "0x97fea03141830c07b789B58bf9AA516ca2633e52",
    value: web3.utils.toWei("0.001"),
  };
  // Assigning the right amount of gas
  tx.gas = await web3.eth.estimateGas(tx);

  // Sending the transaction to the network
  const receipt = await web3.eth
    .sendTransaction(tx)
    .once("transactionHash", (txhash) => {
      console.log(`Mining transaction ...`);
      console.log(`https://${network}.etherscan.io/tx/${txhash}`);
    });
  // The transaction is now on chain!
  console.log(`Mined in block ${receipt.blockNumber}`);
}

//require("dotenv").config();
//sendeth();
getBalance()