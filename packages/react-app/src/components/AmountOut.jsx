import { Input } from "@mui/material";
import { Contract } from "@ethersproject/contracts";
import { ethers } from "ethers";
import { parseUnits } from "ethers/lib/utils";
import { useCall, ERC20 } from "@usedapp/core";
import React from "react";
import { useAmountsOut } from "../hooks/useAmountsOut";

/**
 * Displays the amountOut
 * @param props {string} Props
 * @return {JSX.Element}
 * @constructor
 */
export function AmountOut(props) {
  const { pairContract, amountIn, fromToken, toToken } = props;
  const amountOut = useAmountsOut(pairContract, amountIn, fromToken, toToken) ?? 0;
  const { error, value } =
    useCall({
      contract: new Contract(toToken.toLowerCase(), ERC20.abi),
      method: "decimals",
      args: [],
    }) ?? {};

  if (value) {
    const formattedAmountOut = ethers.utils.formatUnits(amountOut, value[0]);
    return <Input disableUnderline sx={{ fontSize: "2em" }} id="amountOut" value={formattedAmountOut} disabled />;
  }

  const amountOutEth = ethers.utils.formatEther(0);
  return error ? parseUnits("0") : amountOutEth;
}
