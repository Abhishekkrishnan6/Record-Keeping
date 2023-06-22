 // SPDX-License-Identifier: MIT 
 import "./enums.sol";
 //import "link from github";
pragma solidity >0.7.0 <=0.9.0;
contract hashfunction{
    bytes32 public password;
    function generatepass ( string memory _pass) public{
        password = keccak256(abi.encodePacked(_pass));

    }
    function sendMoney(string memory _pass) public view{
        require(keccak256(abi.encodePacked(_pass)) == password,
        "wrong password"
        );
    }
//we can solve by abi.encode(arg);
function abiencodepackdrawback(
    string memory _pass, string memory _name
) public pure returns (bytes32){
return keccak256(abi.encode(_pass,_name));
}



}


//ab.encodepacked error is if we take multiple 
//inputs then then it combines and generate single hash code for that
// eg aa,bbb has same hash code as 
//aab,bb which is wrong
//we can solve by abi.encode(arg);