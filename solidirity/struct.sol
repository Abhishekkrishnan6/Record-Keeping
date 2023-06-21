 // SPDX-License-Identifier: MIT 
pragma solidity >0.7.0 <=0.9.0;
contract structs{
    struct student{
        string name;
        uint age;
    }

student[] public allstudents;

function getstudents(string memory _name, uint _age) public {
student memory newstudent = student({
name: _name,
age: _age
});

allstudents.push(newstudent);

}





}