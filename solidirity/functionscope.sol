// SPDX-License-Identifier: MIT 
pragma solidity >0.7.0 <=0.9.0;
contract function1{

    uint public var1=5;
    uint internal var3 = 6;
    function add() public view returns(uint){

  return var1;
    }

}
  contract function2 {
    function1 var2 = new function1();
    function add1() public view returns(uint){
        return var2.var1();
    }




}
contract function3 is function1 { // derive contract
    
    function add2() public view returns(uint){
        return var3;
    }

}

//internal = when we use internal keywords before a variable it can be used in other contract by deriving that co ntract 
// public = but in case of public we can use in other contracts by creating a new instance and deriving in that contract
//private = we cant use that variable out of that contract;