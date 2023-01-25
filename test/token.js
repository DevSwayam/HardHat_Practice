const {expect} = require("chai"); // importing chai library for unit testing
const { ethers } = require("hardhat");
const { isCallTrace, isCreateTrace } = require("hardhat/internal/hardhat-network/stack-traces/message-trace");


// Mocha is framework and chai is library. Framework is collection of liraries
//This function tells which contract to reffer
describe("Token", function(){

    // it() is use to write test for all functions. It includes what that function or what output we are expecting 
    // this each it() function for each test of smart contract function
    it("On Deployment all tokens supply should get assigned to owner", async function(){
        // We are usng aync function cause execution should stop for sometime while we are getting value from samrt contract
    
        // Now ethers part start
        // as getSigners gives us array of accounts we stored in in [owner] array
        const [owner] = await ethers.getSigners();

        // We are checking if we got right address or not?
        console.log("Signers Object :",owner);

        // Cresating instance of our contract
        const Token = await ethers.getContractFactory("Token");

        // deploying that instance of contract
        const hardhatToken = await Token.deploy();

        //checking for owners address
        console.log("Owners Address is :",owner.address);

        // Their is balanceOf() function is contract that take address so we are retriving balance from that function
        const ownerBalance =await hardhatToken.balanceOf(owner.address);

        // and checking whether the total supply should be equal to owners balance or not
        expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
    });
});