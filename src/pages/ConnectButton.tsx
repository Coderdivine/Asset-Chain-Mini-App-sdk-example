"use client";
import React, { useState } from "react";
import { INFURA_KEY, PROJECT_ID } from "@/configs";
import {
  AssetChainKit,
  concatAddress,
  onCopy,
  useAssetChainConnect,
  useEvmWallet,
  useTonWallet,
} from "assetchain-telegram-app-starter-kit";

function ConnectButton() {
  const evmWallet = {
    projectId: PROJECT_ID,
    infuraApiKey: INFURA_KEY,
    metadata: { name: "Asset Chain test by Chimdi" },
  };
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  const {
    connectEvmWallet,
    evmAddress,
    disconnectEvmWallet,
    sendTransactionEvm,
  } = useEvmWallet(evmWallet);
  const {
    connectWallet,
    userFriendlyAddress,
    disconnectWallet,
    sendTransaction,
  } = useTonWallet();

  const sendTonTransaction = async () => {
    try {
      const result = await sendTransaction({ to: address, value: amount });
      console.log({ sendTonTransaction: result });
    } catch (error) {
      console.log({ sendTonTransactionError: error });
    }
  };

  const sendAssetChainTransaction = async () => {
    try {
      const result = await sendTransactionEvm({ to: address, value: amount });
      console.log({ sendTonTransaction: result });
    } catch (error) {
      console.log({ sendTonTransactionError: error });
    }
  };

  return (
    <div className="m-2">
      <AssetChainKit
        metadata={{ name: "Asset Chain test by Chimdi" }}
        infuraApiKey={INFURA_KEY}
        projectId={PROJECT_ID}
        defaultConnector={undefined}
      >
        <div className="flex justify-between mb-4">
          {userFriendlyAddress ? (
            <button
              onClick={disconnectWallet}
              className="px-7 py-2 mb-4 border rounded-md mx-2"
            >
              Disconnect TON
            </button>
          ) : (
            <button
              onClick={connectWallet}
              className="flex px-7 py-2 mb-4 border rounded-md mx-2"
            >
              Connect TON wallet
            </button>
          )}

          {evmAddress ? (
            <button
              onClick={disconnectEvmWallet}
              className="px-8 py-3 border rounded-md"
            >
              Disconnect Asset Chain
            </button>
          ) : (
            <button
              onClick={connectEvmWallet}
              className="px-8 py-3 border rounded-md"
            >
              Connect Asset Chain
            </button>
          )}
        </div>
        <div className="text-center grid">
          {evmAddress && (
            <p onClick={() => onCopy(evmAddress)}>
              <span>Asset Chain:</span> {concatAddress(evmAddress)}{" "}
            </p>
          )}
          {userFriendlyAddress && (
            <p onClick={() => onCopy(userFriendlyAddress)}>
              <span>Asset TON:</span> {concatAddress(userFriendlyAddress)}{" "}
            </p>
          )}
        </div>

        {userFriendlyAddress && (
          <div className="m-2 p-4 border rounded-lg w-auto mt-8 justify-center text-center">
            <h1 className="text-center mb-4 mt-4">Send Transaction (TON) </h1>
            <div className="">
              <input
                className="bg-transparent border rounded-md mr-2 py-2 px-10 mb-4 text-white"
                placeholder="Address"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
              />
              <input
                className="bg-transparent border rounded-md mr-2 py-2 px-10 text-white"
                placeholder="amount"
                onChange={(e) => setAmount(e.target.value)}
                value={amount}
              />
              <button
                onClick={sendTonTransaction}
                className="bg-transparent border rounded-md py-2 px-10 mt-4 text-white"
              >
                Send
              </button>
            </div>
          </div>
        )}

        {evmAddress && (
          <div className="m-2 p-4 border rounded-lg w-auto mt-8 justify-center text-center">
            <h1 className="text-center mb-4 mt-4">Send Transaction (Asset Chain) </h1>
            <div className="">
              <input
                className="bg-transparent border rounded-md py-2 px-10 mb-4 text-white"
                placeholder="Address"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
              />
              <input
                className="bg-transparent border rounded-md py-2 px-10 text-white"
                placeholder="amount"
                onChange={(e) => setAmount(e.target.value)}
                value={amount}
              />
              <button
                onClick={sendAssetChainTransaction}
                className="bg-transparent border rounded-md py-2 px-10 mt-4 text-white"
              >
                Send
              </button>
            </div>
          </div>
        )}
      </AssetChainKit>
    </div>
  );
}

export default ConnectButton;
