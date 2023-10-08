// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Test {
    uint public value = 0;

    function setValue() public {
        value = value + 1;
    }
}
