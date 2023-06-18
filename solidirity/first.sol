// SPDX-License-Identifier: MIT 
pragma solidity >0.7.0 <=0.9.0;

contract functions{
    uint public val = 4; //state variable
    //public is used to convert it into function and whenever u want to use the value just call it
    function add() public view returns(uint){


          return val;

    }
    function add1() public pure returns(uint){

          uint val1 = 32; // local variable it availabe till when the function is exxecuting
          return val1;

    }
    function global() public view returns(uint){
        //return block.timestamp; // it will return the time when tranastion happen
        //return msg.sender; // it will return the sender address
        //msg.value //it will give the amount sender send sthe amounts
        return msg.sender.balance; // it will give the balance of asender account
    }
}

//pure -> it is used when we dont use the state variables and edit
//view -> it is used when we just read  the state variables 
//if we want to change state vaariable we dont have to give either pure and view