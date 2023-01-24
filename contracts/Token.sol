// SPDX-License-Identifier: UNLICENSED
pragma solidity >= 0.5.0 <0.9.0;

contract Token {

    // we are creating a token which has 
    string public name = "hardhat Token"; // name
    string public symbol = "HHT"; // symbol
    uint public totalSupply = 10000; // initial supply
    address public owner; // and its owner
    mapping (address => uint) balances; // to track which owner has how many tokens
    constructor() {
        balances[msg.sender]=totalSupply; // who ever deploys this contract he will get the total supply
        owner = msg.sender; // whoever deploys contract will get ownership 
    }

    // This function transfers token from one address to other 
    function transfer(address to,uint amount) external{
        // checking whether that user actually has sufficient balance or not
        require(balances[msg.sender]>=amount,"You Dont Have enough Balance");
        // If he has then we will deduct the balance from the sender
        balances[msg.sender] -= amount;
        // And add it on receiver
        balances[to]+= amount;
    }

    // This function fetches the balance of token on particular address
    function balanceOf(address account) external view returns(uint){
        return balances[account];
    } 
}