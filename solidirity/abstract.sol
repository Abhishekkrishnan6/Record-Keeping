 // SPDX-License-Identifier: MIT 
pragma solidity >0.7.0 <=0.9.0;
abstract contract base {
    uint public num;
    function foo() public pure  virtual returns(uint);
}
contract main is base{
    function foo() public pure override returns(uint){
        return 1;
    }
}