"use client";
import React from 'react';
import { INFURA_KEY, PROJECT_ID } from '@/configs';
import { AssetChainKit, concatAddress, onCopy, useEvmWallet, useTonWallet } from 'assetchain-connect-test';

function ConnectButton() {
    const evmWallet = { projectId: PROJECT_ID, infuraApiKey: INFURA_KEY, metadata: { name: "Chimdi" }};
    const { connectEvmWallet, evmAddress } = useEvmWallet(evmWallet);
    const { connectWallet, userFriendlyAddress } = useTonWallet();
  return (
    <div className='m-2'>
        <AssetChainKit
          metadata={{ name: "Chimdi " }}
          infuraApiKey={INFURA_KEY}
          projectId={PROJECT_ID}
          defaultConnector={undefined}
        >
         <div className="grid justify-between mb-4">
         <button 
          onClick={connectWallet}
          className="px-8 py-3 mb-4 border rounded-md mx-2">
            Connect TON wallet
          </button>

          <button 
          onClick={connectEvmWallet}
          className="px-8 py-3 border rounded-md">
            Connect Asset Chain
          </button>
         </div>
         <div className='text-center grid'>
            { evmAddress && <p onClick={() => onCopy(evmAddress)}><span>Asset Chain:</span> {concatAddress(evmAddress)} </p>}
            { userFriendlyAddress && <p onClick={() => onCopy(userFriendlyAddress)}><span>Asset TON:</span> {concatAddress(userFriendlyAddress)} </p>}
         </div>
        </AssetChainKit>
    </div>
  )
}

export default ConnectButton