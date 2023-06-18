 // SPDX-License-Identifier: MIT 
pragma solidity >0.7.0 <=0.9.0;

contract functions{

uint[] public numbers = [1,2,334,4,4];
function grtARR() public view returns(uint[] memory){
    return numbers;
}
function grtARRelement() public view returns(uint){
    return numbers[0];
}

function grtARRassign() public returns(uint){
    numbers[0] =6;
    uint lenth1 = numbers.length;
    numbers.push(5);
    numbers.pop();
    return numbers[0];
}

}