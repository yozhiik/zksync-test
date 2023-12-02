//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Messenger {
    string private message;

    constructor(string memory _message) {
        message = _message;
    }

    function showMessage() public view returns (string memory) {
        return message;
    }

    function setGreeting(string memory _message) public {
        message = _message;
    }
}
