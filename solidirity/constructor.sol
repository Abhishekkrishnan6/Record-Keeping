 // SPDX-License-Identifier: MIT 
 pragma solidity >0.7.0 <=0.9.0;
contract Base{
uint public balance;
address public owner;

constructor(uint _balance){
    owner = msg.sender;
    balance = _balance;
}


}
contract Derived is Base{
    constructor() Base(20){
        
    }
}