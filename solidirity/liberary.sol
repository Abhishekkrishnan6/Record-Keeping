 // SPDX-License-Identifier: MIT 
import "./enums.sol";
pragma solidity >0.7.0 <=0.9.0;
library fun{
    function add() public pure returns(uint){
        return 5+4;
    }
}
contract main{
    function call() public pure returns(uint){
        return fun.add();
    }
}