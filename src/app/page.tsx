"use client";
import ConnectButton from "@/pages/ConnectButton";
import { TonConnectUIProvider } from "assetchain-telegram-app-starter-kit";
const manifestUrl = "https://api-staging.clanofraiders.com/tonconnect-manifest.json";

export default function Home() {

  return (
    <div className="grid mt-6 items-center font-[family-name:var(--font-geist-sans)]">
      <TonConnectUIProvider manifestUrl={manifestUrl}>
        <ConnectButton />
      </TonConnectUIProvider>
    </div>
  );
}
