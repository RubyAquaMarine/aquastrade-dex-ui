This project was bootstrapped with [Create Eth App](https://github.com/paulrberg/create-eth-app) and the
[Uniswap v2](https://github.com/paulrberg/create-eth-app/tree/develop/templates/react/uniswap-v2) template.

This template contains 2 packages:

- [contracts](/packages/contracts)
- [react-app](/packages/react-app)

## How to start
- nvm use v16.19.0
- yarn install
- yarn run react-app:start

## UI

![Screenshot 2023-11-21 at 3 29 35 PM](https://github.com/RubyAquaMarine/aquastrade-dex-ui/assets/86425604/a6f2ca6d-8f87-45d2-b29d-f395de981e53)


## Bugs Dec 2023
- if user on mainnet, they get error immediately, 
- remove the minimum volume value in UI to 18^ - done
- incorrect amountOut when swapping from AQUA to USDT (6 decimals) - done