This project was bootstrapped with [Create Eth App](https://github.com/paulrberg/create-eth-app) and the
[Uniswap v2](https://github.com/paulrberg/create-eth-app/tree/develop/templates/react/uniswap-v2) template.

This template contains 2 packages:

- [contracts](/packages/contracts)
- [react-app](/packages/react-app)

The React app implements a basic example for how to connect and pull data from the
[Uniswap v2](https://thegraph.com/explorer/subgraph/uniswap/uniswap-v2) subgraph.

## What is Uniswap v2?

Uniswap V2 is the second iteration of the Uniswap, a protocol for automated token exchange on Ethereum. Read more about it in the [official documentation](https://uniswap.org/docs/v2/).

## How to regenerate the project

Run: yarn create eth-app my-eth-app --template uniswap-v2
More: https://github.com/paulrberg/create-eth-app

## How to start
- yarn install
- update the configuration in ./packages/react-app/src/config.js
- yarn run react-app:start
### UI 
<img width="509" alt="Screenshot 2023-04-12 at 9 18 17 PM" src="https://user-images.githubusercontent.com/86425604/231486626-fa0551ab-b53f-42e7-a6cc-e958503750e2.png">


# 2023 upgrade
- "@usedapp/core": "^1.1.5", -> `1.2.11`
- "ethers": "^5.7.0", ->  `5.7.2`
- "web3": "^1.7.5" -> `1.10.0``
