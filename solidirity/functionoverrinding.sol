 // SPDX-License-Identifier: MIT 
 import "./enums.sol";
 //import "link from github";
pragma solidity >0.7.0 <=0.9.0;
contract base{
    function val() public pure virtual returns(uint){
        return 6;
    }
}
contract main is base{
    function val() public pure override returns(uint){
        return 8;
    }
}
contract base1 {
    function foo() virtual public{}
}
contract base2 {
    function foo() virtual public{}
}
contract inheritaed is base1,base2{
    function foo() public override(base1,base2){}
}