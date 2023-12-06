import { DEFAULT_SUPPORTED_CHAINS, Mainnet } from "@usedapp/core";
import { getDefaultProvider } from "ethers";
import * as dotenv from "dotenv";
import { AQUA_DATA_EUROPA } from "./pools.js";// aqua: todo
dotenv.config({ path: ".env" });
export const ROUTER_ADDRESS = "0x698EA133CBA3BACD4aA6405411d8e8c1726D5f61";
export const POOLS = undefined ; // leave undefined to get pools dynamically from the router : AQUA_DATA_EUROPA.pools
const NODIES_KEY = process.env.NEXT_PUBLIC_NODIES_KEY;// aqua: todo

const Europa = {
  chainId: 2046399126,
  chainName: "Europa Hub",
  isTestChain: false,
  isLocalChain: false,
  multicallAddress: "0x918D8F3670c67f14Ff3fEB025D46B9C165d12a23",
  getExplorerAddressLink: (address) => `https://elated-tan-skat.explorer.mainnet.skalenodes.com/address/${address}`,
  getExplorerTransactionLink: (transactionHash) => `https://elated-tan-skat.explorer.mainnet.skalenodes.com/tx/${transactionHash}`,
  // Optional parameters:
  rpcUrl: "https://mainnet.skalenodes.com/v1/elated-tan-skat",
  blockExplorerUrl: "https://elated-tan-skat.explorer.mainnet.skalenodes.com/",
  nativeCurrency: {
    name: "sFUEL",
    symbol: "sFUEL",
    decimals: 18,
  },
};

export const DAPP_CONFIG = {
  readOnlyChainId: Europa.chainId,
  readOnlyUrls: {
    [Europa.chainId]: Europa.rpcUrl,
    [Mainnet.chainId]: getDefaultProvider("mainnet"),
  },
  networks: [...DEFAULT_SUPPORTED_CHAINS, Europa, Mainnet],
};
