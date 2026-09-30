// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Counter {
    uint256 public count;

    event CountIncremented(address indexed account, uint256 newCount);

    function increment() external {
        count += 1;
        emit CountIncremented(msg.sender, count);
    }

    function reset() external {
        count = 0;
    }
}