import { Button } from "@mui/material";
import { shortenAddress, useEthers } from "@usedapp/core"; //useLookupAddress
import React, { useEffect, useState } from "react";

export function WalletButton() {
  const [rendered, setRendered] = useState("");

  // const {ens} = useLookupAddress();
  const { account, activateBrowserWallet, deactivate } = useEthers();

  useEffect(() => {
    // if (ens) {
    //   console.log(ens);
    //   setRendered(ens);
    // } else if (account) {
    if (account) {
      setRendered(shortenAddress(account));
    } else {
      setRendered("");
    }
  }, [account, setRendered]); //ens

  return (
    <Button 
    style={{
      backgroundColor: "#231e20",
    }}
      variant="contained"
      onClick={() => {
        if (!account) {
          activateBrowserWallet();
        } else {
          deactivate();
        }
      }}
    >
      {rendered === "" && "Connect Wallet"}
      {rendered !== "" && rendered}
    </Button>
  );
}
