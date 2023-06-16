pragma solidity >0.7.0 <=0.9.0;
contract campaign{
    string public title;
    uint public requiredamout;
    string public image;
    string public story;
    address payable public owner;
    uint public receiveamount;
 event donated(address indexed donar, uint indexed amount, uint indexed timestamp);
constructor(
    string memory campaigntitle,
    uint requiredcampaignamount,
    string memory imgurl,
    string memory storyurl
){
    title =campaigntitle;
    requiredamout = requiredcampaignamount;
    image = imgurl;
    story = storyurl;
    owner = payable(msg.sender);

}

function donate() public payable{
    require(requiredamout>receiveamount,"required amount fullfilled");
    owner.transfer(msg.value);
    receiveamount+=msg.value;
    emit donated(msg.sender,msg.value,block.timestamp);
}


}