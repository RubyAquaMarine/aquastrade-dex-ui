import "./index.css";
import { DAppProvider } from "@usedapp/core";
import { DAPP_CONFIG } from "./config";
import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import ErrorBoundary from "./components/ErrorBoundary";

function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-left">
          <div className="header-item">Cryptos: 2M+</div>
          <div className="header-item">Exchanges: 678</div>
          <div className="header-item">Market Cap: $1.41T</div>
          <div className="header-item">24h Vol: $50.27B</div>
          <div className="header-item">Dominance: BTC: 51.6% ETH: 17.3%</div>
        </div>

        <div className="header-right">
          <div className="header-item">ETH Gas: 32 Gwei</div>
          <div className="header-item">Fear & Greed: 71/100</div>
          <div className="header-item">Language: English</div>
          <div className="header-item">Currency: USD</div>
          <div className="header-item">Get listed</div>
          <div className="header-item">API</div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="column">
          <h3 className="column-title">Contracts</h3>
          <div className="link-list">
            <a href="https://elated-tan-skat.explorer.mainnet.skalenodes.com/address/0x698EA133CBA3BACD4aA6405411d8e8c1726D5f61">Router</a>
            <a href="https://elated-tan-skat.explorer.mainnet.skalenodes.com/address/0xc318a82CB7c2B0faf7e355BB8F285016956aBF55">Factory</a>
            <a href="https://elated-tan-skat.explorer.mainnet.skalenodes.com/address/0xc44A8E52A835c77932eB8747bD7E979c27308660/write-contract#address-tabs">
              Market Place
            </a>
          </div>
        </div>
        <div className="column">
          <h3 className="column-title">NFT Utility</h3>
          <div className="link-list">
            <a href="https://elated-tan-skat.explorer.mainnet.skalenodes.com/token/0x87f23b254d59f97e7c4ceC7C14AbC7D6a1a4A0E3/token-transfers">
              Bronze Swap NFT
            </a>
            <a href="https://elated-tan-skat.explorer.mainnet.skalenodes.com/token/0xE4702E2Bab8702A1aA40C7757e15A9e2bc8C15D1/token-transfers">
              Silver Swap NFT
            </a>
            <a href="https://elated-tan-skat.explorer.mainnet.skalenodes.com/token/0xcEcd42ff7eCC7b0BfF7a9CF95C6e7ce9aA052d8C/token-transfers">
              Gold Swap NFT
            </a>
          </div>
        </div>
        <div className="column">
          <h3 className="column-title">Socials</h3>
          <div className="link-list">
            <a href="https://github.com/RubyAquaMarine">Github</a>
            <a href="https://discord.gg/TPVpcUgt3k">Discord</a>
            <a href="https://twitter.com/AquasTrade">Twitter(X)</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <DAppProvider config={DAPP_CONFIG}>
      <Header />

      <main className="main">
        <div className="rounded filled background centerContent ">
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </div>
      </main>

      <Footer />
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
//  <div className="gradient-container"> test</div>
//  <div className="rounded filled background centerContent ">
