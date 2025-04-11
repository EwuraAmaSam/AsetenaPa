import { MetaMaskSDK } from "@metamask/sdk";

const MMSDK = new MetaMaskSDK();
const provider = MMSDK.getProvider();

async function handleConnectAndSign() {
  try {
    const signature = await MMSDK.connectAndSign({ msg: "Hello in one go!" });
    console.log("Signature:", signature);
  } catch (err) {
    console.error("Error with connectAndSign:", err);
  }
}

document
  .getElementById("connectSignBtn")
  .addEventListener("click", handleConnectAndSign);
