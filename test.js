'use strict'

const Web3 = require('web3')
const web3 = new Web3(process.env.ENODE_URL)
web3.eth.subscribe('newBlockHeaders', function (err, result) {
  if (err) {
    console.error('Subscription error', err.message)
    process.exit(1)
  }
  console.log('Subscription OK')
  process.exit()
})
console.log('Subscribing...')
