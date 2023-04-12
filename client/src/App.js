import abi from "./contract/Coffee.json";
import React, { useEffect, useState } from "react";
import './App.css';
import { ethers } from "hardhat";
import Buy from "./components/Buy";
import Memos from "./components/Memos";

function App() {

  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  })

  useEffect(()=>{
    const connectWallet = async()=>{
      const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
      const contractABI = abi.abi;

      try{
        const {ethereum}=window;

        if(ethereum){
          const account = await ethereum.request({method:"eth_requestAccounts",})
        }
        const provider = new ethers.provider.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress,contractABI,signer)
        setState(provider,signer,contract);
      }catch(error){
        console.log(error);
      }
    };
    connectWallet();
  },[])
  console.log(state);
  return (
    <div className="App">
      <Buy state={state}></Buy>
      <Memos state={state}></Memos>
    </div>
  );
}

export default App;
