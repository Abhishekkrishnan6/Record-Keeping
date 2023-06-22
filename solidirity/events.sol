 // SPDX-License-Identifier: MIT 
pragma solidity >0.7.0 <=0.9.0;
contract events{
    event transfer(address indexed _from , address _to, uint amout);
    function trans(address to , uint amount) public{
        emit transfer(msg.sender, to, amount);
    }
}