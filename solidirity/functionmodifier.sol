 // SPDX-License-Identifier: MIT 
pragma solidity >0.7.0 <=0.9.0;
contract functionmodifier{
    address public owner;
    constructor(){
        owner= msg.sender;
    }
    modifier onltowner {
        require(msg.sender==owner);
        _;
    }
    function sendmoney() public onltowner{

    }
}
//modifier is use if only owner wants to send the money
//here require keyword is used for that
