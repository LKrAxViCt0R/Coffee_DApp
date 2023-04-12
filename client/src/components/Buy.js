import { ethers } from "hardhat";

const Buy=({state})=>{

    const buyCoffee=async(event)=>{
        event.preventDefault();
        const {contract} = state;
        const name = document.querySelector("#name").value;
        const message = document.querySelector("#message").value;
        console.log(name,message,contract);
        const amount = {value:ethers.utils.parseEther("0.001")}
        const transaction = await contract.buyCoffee(name,message,amount)

        await transaction.wait();
        console.log("Transaction Complete")
    }

    return<>
        <form onSubmit={buyCoffee}>
            <label>Name</label>
            <input type="text" id="name" placeholder="Enter Your Name"></input>
            <label>Message</label>
            <input type="text" id="message" placeholder="Enter Your Message"></input>
            <button type="submit">Pay</button>
        </form>
    </>
}

export default Buy;