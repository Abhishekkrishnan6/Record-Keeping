 // SPDX-License-Identifier: MIT 
pragma solidity >0.7.0 <=0.9.0;
interface base {
    function foo() external pure returns(uint);
}
contract main is base{
    function foo() public pure override returns(uint){
        return 1;
    }
}