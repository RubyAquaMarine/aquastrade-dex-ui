import { Alert, Container, Stack } from "@mui/material";
import { useEthers } from "@usedapp/core";
import React from "react";
import { Exchange } from "./Exchange";
import { WalletButton } from "./WalletButton";
import { POOLS } from "../config";
import { usePoolsWithWETHAddress } from "../hooks/usePoolsWithWETHAddress";
import { DAPP_CONFIG } from "../config";
const config = DAPP_CONFIG;

function App() {
  const { account, error, chainId, switchNetwork } = useEthers();
  const [poolsLoading, pools] = usePoolsWithWETHAddress(POOLS);
  if (error) {
    console.error("Ethers Failed to Load");
    throw error;
  }

  if (config?.readOnlyChainId !== chainId) {
    switchNetwork(config.readOnlyChainId);

    return (
      <>
        <div>
          <Stack justifyContent="right" direction="row" padding="10px">
            <div>Switching to Skale: EuropaHub</div>
          </Stack>
        </div>
      </>
    );
  } else if (config?.readOnlyUrls[chainId]) {
    console.error("Connected to Skale: EuropaHub", chainId);
    return (
      <>
        <div style={{ padding: "10px" }}>
          <Stack justifyContent="center" direction="column" style={{ marginBottom: "30px" }}>
            <WalletButton />
          </Stack>
          <Container maxWidth="md">
            {account ? (
              poolsLoading ? (
                <Alert severity="info">Loading pools, please wait!</Alert>
              ) : (
                <Exchange pools={pools} />
              )
            ) : (
              <Alert severity="info">Please connect your wallet</Alert>
            )}
          </Container>
          <Stack justifyContent="center" direction="column" style={{ marginTop: "auto" }}>
            <Stack sx={{ position: "sticky", bottom: 0 }}>{/* Your content for the bottom Stack */}</Stack>
          </Stack>
        </div>{" "}
      </>
    );
  }
}
export default App;
