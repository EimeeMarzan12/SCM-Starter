import { useState, useEffect } from "react";
import { ethers } from "ethers";
import atm_abi from "../artifacts/contracts/Assessment.sol/Assessment.json";

export default function HomePage() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [atm, setATM] = useState(undefined);
  const [balance, setBalance] = useState(undefined);

  const contractAddress = "0x8abb8e62bd73f4c73b2ce7a02631b2dc911ab720";
  const atmABI = atm_abi.abi;

  const getWallet = async () => {
    if (window.ethereum) {
      setEthWallet(window.ethereum);
    }

    if (ethWallet) {
      const accounts = await ethWallet.request({ method: "eth_accounts" });
      handleAccount(accounts);
    }
  };

  const handleAccount = (accounts) => {
    if (accounts.length > 0) {
      console.log("Account connected: ", accounts[0]);
      setAccount(accounts[0]);
    } else {
      console.log("No account found");
    }
  };

  const connectAccount = async () => {
    if (!ethWallet) {
      alert("MetaMask wallet is required to connect");
      return;
    }

    const accounts = await ethWallet.request({ method: "eth_requestAccounts" });
    handleAccount(accounts);

    // Get a reference to the deployed contract
    getATMContract();
  };

  const getATMContract = () => {
    const provider = new ethers.providers.Web3Provider(ethWallet);
    const signer = provider.getSigner();
    const atmContract = new ethers.Contract(contractAddress, atmABI, signer);

    setATM(atmContract);
  };

  const getBalance = async () => {
    if (atm) {
      const balanceInWei = await atm.getContractBalance();
      setBalance(ethers.utils.formatEther(balanceInWei));
    }
  };

  const deposit = async () => {
    if (atm) {
      try {
        const amount = ethers.utils.parseEther("1"); // Convert 1 ETH to wei
        const tx = await atm.deposit(amount, { value: amount, gasLimit: 500000 });
        await tx.wait();
        getBalance(); // Refresh balance
      } catch (error) {
        console.error("Error during deposit: ", error);
        alert("Deposit failed: " + error.message);
      }
    }
  };
  
  const withdraw = async () => {
    if (atm) {
      try {
        const amount = ethers.utils.parseEther("1"); // Convert 1 ETH to wei
        const tx = await atm.withdraw(amount, { gasLimit: 500000 });
        await tx.wait();
        getBalance(); // Refresh balance
      } catch (error) {
        console.error("Error during withdrawal: ", error);
        alert("Withdrawal failed: " + error.message);
      }
    }
  };
  

  const initUser = () => {
    if (!ethWallet) {
      return <p>Please install MetaMask to use this ATM.</p>;
    }

    if (!account) {
      return <button onClick={connectAccount}>Please connect your MetaMask wallet</button>;
    }

    if (balance === undefined) {
      getBalance();
    }

    return (
      <div>
        <p>Your Account: {account}</p>
        <p>Contract Balance: {balance ? `${balance} ETH` : "Loading..."}</p>
        <button onClick={deposit}>Deposit 1 ETH</button>
        <button onClick={withdraw}>Withdraw 1 ETH</button>
      </div>
    );
  };

  useEffect(() => {
    getWallet();
  }, []);

  return (
    <main className="container">
      <header><h1>Welcome to the Metacrafters ATM!</h1></header>
      {initUser()}
      <style jsx>{`
        .container {
          text-align: center;
        }
      `}</style>
    </main>
  );
}
