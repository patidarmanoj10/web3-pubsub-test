'use strict'

const Web3 = require('web3')
var options = {
  timeout: 30000,
  autoReconnect: true,
  requestOptions: { rejectUnauthorized: false },
};
var provider = new Web3.providers.WebsocketProvider(process.env.ENODE_URL, options)
const web3 = new Web3(provider)

setTimeout(function () {
  web3.eth.getBlockNumber()
    .then(console.log);
  web3.eth.subscribe('newBlockHeaders', function (err, result) {
    if (err) {
      console.error('Subscription error', err.message)
      process.exit(1)
    }
    console.log(`Listening newBlockHeaders. New block number ${result.number}`)
    // process.exit()
  })
  console.log('Subscribing...')

}, 1000);
