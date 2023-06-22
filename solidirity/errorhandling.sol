 // SPDX-License-Identifier: MIT 
pragma solidity >0.7.0 <=0.9.0;
contract errorhandling{
    address public owner;
    uint public count;
    constructor(){
        owner=msg.sender;
    }

function call() public{
    count++;
    //require(msg.sender==owner,'caller is not owner');
    // if more condition then use revert
if(msg.sender != owner){
  revert("caller is not owner");

}
//assertv is use for internal error

}
}
