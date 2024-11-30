// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

contract Assessment {
    address payable public owner;
    uint256 public contractBalance;

    event Deposit(address indexed depositor, uint256 amount, uint256 newBalance);
    event Withdraw(address indexed withdrawer, uint256 amount, uint256 newBalance);

    error Unauthorized(address caller);
    error InsufficientBalance(uint256 available, uint256 required);

    modifier onlyOwner() {
        if (msg.sender != owner) {
            revert Unauthorized(msg.sender);
        }
        _;
    }

    constructor(uint256 initBalance) payable {
        require(initBalance >= 0, "Initial balance cannot be negative");
        require(msg.value >= initBalance, "Insufficient initial balance provided");
        owner = payable(msg.sender);
        contractBalance = initBalance;
    }

    function getContractBalance() external view returns (uint256) {
        return address(this).balance; // Fetch contract's actual ETH balance
    }

    function deposit(uint256 _amount) external payable onlyOwner {
        require(msg.value == _amount, "Mismatch between message value and deposit amount");
        uint256 previousBalance = contractBalance;

        contractBalance += _amount;

        assert(contractBalance == previousBalance + _amount);

        emit Deposit(msg.sender, _amount, contractBalance);
    }

    function withdraw(uint256 _amount) external onlyOwner {
        if (contractBalance < _amount) {
            revert InsufficientBalance(contractBalance, _amount);
        }
        uint256 previousBalance = contractBalance;

        contractBalance -= _amount;

        // Transfer ETH to the owner
        (bool success, ) = owner.call{value: _amount}("");
        require(success, "Transfer failed");

        assert(contractBalance == previousBalance - _amount);

        emit Withdraw(msg.sender, _amount, contractBalance);
    }
}
