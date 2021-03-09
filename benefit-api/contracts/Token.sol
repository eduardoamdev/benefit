pragma solidity ^0.5.16;

contract Token {

    address public contractAddress;

    address public owner;

    string public name;

    string public symbol;

    uint8 public decimals;

    uint256 public totalSupply;

    mapping(address => uint256) public balanceOf;

    uint256 public initialPrice;

    uint256 public price;

    uint256 public soldTokens;

    uint256 public dividendPerToken;

    mapping(address => uint256) public dividendBalanceOf;

    uint256 public initialSupport;

    uint256 public support;

    uint256 public totalSupplyWithoutDecimals;

    constructor() public {
        contractAddress = address(this);
        initialPrice = 10000000000000000;
        price = 0;
        name = "Benefit";
        symbol = "BNF";
        decimals = 18;
        totalSupply = 100 * (uint256(10)**decimals);
        totalSupplyWithoutDecimals = 100;
        owner = msg.sender;
        balanceOf[owner] = totalSupply;
    }

    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    event Sold(address buyer, uint256 amount);

    event EtherMovements(uint256 amount);

    function mul(uint256 _num1, uint256 _num2) internal pure returns (uint256) {
        if (_num1 == 0) {
            return 0;
        } else if (_num2 == 0) {
            return 0;
        } else {
            uint256 result;
            result = _num1 * _num2;
            return result;
        }
    }

    function div(uint256 _num1, uint256 _num2) internal pure returns (uint256) {
        require(_num2 != 0);
        if (_num1 == 0) {
            return 0;
        } else {
            uint256 result;
            result = _num1 / _num2;
            uint256 divisional;
            divisional = _num1 % _num2;
            require(_num1 == ((result * _num2) + divisional));
            uint256 finalResult = result + (divisional / _num2);
            return finalResult;
        }
    }

    function contractBalance() public view returns (uint256) {
        return contractAddress.balance;
    }

    function consultAccountDividends() public view returns (uint256) {
        uint256 accountDividends = div(
            mul(dividendPerToken, balanceOf[msg.sender]),
            uint256(10)**decimals
        );
        return accountDividends;
    }

    function beginSold(uint256 _support) public payable {
        require(owner == msg.sender);
        require(balanceOf[msg.sender] == totalSupply);
        require(msg.value == _support);
        require(msg.value != 0);
        price = initialPrice;
        initialSupport = _support;
        support = _support;
        uint256 initialContractTokens;
        initialContractTokens = balanceOf[msg.sender];
        balanceOf[msg.sender] -= initialContractTokens;
        balanceOf[address(this)] += initialContractTokens;
        emit Transfer(msg.sender, address(this), initialContractTokens);
    }

    function endSold() public {
        require(owner == msg.sender);
        uint256 balance = balanceOf[address(this)];
        balanceOf[address(this)] -= balance;
        require(balanceOf[address(this)] == 0);
        balanceOf[msg.sender] += balance;
        dividendPerToken = 0;
        msg.sender.transfer(contractAddress.balance);
        emit Transfer(address(this), msg.sender, balance);
    }

    function updateSupport() public {
        uint256 balance = contractAddress.balance;
        if (balance < initialSupport) {
            support = balance;
        } else {
            support = initialSupport;
        }
    }

    function getSupport() public returns (uint256) {
        updateSupport();
        return support;
    }

    function buy(uint256 _numTokens) public payable {
        updateSupport();
        dividendBalanceOf[msg.sender] = div(
            mul(dividendPerToken, balanceOf[msg.sender]),
            uint256(10)**decimals
        );
        uint256 tokens = _numTokens;
        require(balanceOf[address(this)] >= tokens);
        soldTokens += tokens;
        balanceOf[address(this)] -= tokens;
        balanceOf[msg.sender] += tokens;
        uint256 contractEtherBalance = contractAddress.balance;
        uint256 contractEthersMinusSupport = contractEtherBalance - support;
        dividendPerToken = div(
            mul(contractEthersMinusSupport, (uint256(10)**decimals)),
            soldTokens
        );
        if (dividendPerToken < initialPrice) {
            dividendPerToken = initialPrice;
        }
        dividendBalanceOf[msg.sender] = div(
            mul(dividendPerToken, balanceOf[msg.sender]),
            uint256(10)**decimals
        );
        if (support < initialSupport) {
            if(support + msg.value <= initialSupport){
                support = support + msg.value;
            } else {
                support = initialSupport;
            }
        }
        emit Transfer(address(this), msg.sender, tokens);
        emit Sold(msg.sender, _numTokens);
    }

    function redeemTokens(uint256 _tokensToRedeem) public returns (uint256) {
        updateSupport();
        dividendBalanceOf[msg.sender] = div(
            mul(dividendPerToken, balanceOf[msg.sender]),
            uint256(10)**decimals
        );
        uint256 tokensToRedeem = _tokensToRedeem;
        require(balanceOf[msg.sender] >= tokensToRedeem);
        uint256 etherToRefund = div(
            mul(dividendPerToken, tokensToRedeem),
            uint256(10)**decimals
        );
        soldTokens -= tokensToRedeem;
        balanceOf[msg.sender] -= tokensToRedeem;
        balanceOf[address(this)] += tokensToRedeem;
        if (soldTokens == 0) {
            dividendPerToken = 0;
        } else {
            uint256 futureContractEtherBalance = contractAddress.balance -
                etherToRefund;
            uint256 contractEthersMinusSupport = futureContractEtherBalance -
                support;
            dividendPerToken = div(
                mul(contractEthersMinusSupport, (uint256(10)**decimals)),
                soldTokens
            );
            if (dividendPerToken < initialPrice) {
                dividendPerToken = initialPrice;
            }
        }
        if (dividendPerToken < initialPrice) {
            price = initialPrice;
        } else {
            price = dividendPerToken;
        }
        dividendBalanceOf[msg.sender] = div(
            mul(dividendPerToken, balanceOf[msg.sender]),
            uint256(10)**decimals
        );
        msg.sender.transfer(etherToRefund);
        updateSupport();
        emit Transfer(msg.sender, address(this), tokensToRedeem);
        return etherToRefund;
    }

    function transfer(address _to, uint256 _value)
        public
        returns (bool success)
    {
        require(_to != contractAddress);
        require(balanceOf[msg.sender] >= _value);
        address destinationAddress = _to;
        uint256 tokensToTransfer = _value;
        balanceOf[msg.sender] -= tokensToTransfer;
        balanceOf[destinationAddress] += tokensToTransfer;
        dividendBalanceOf[msg.sender] = div(
            mul(dividendPerToken, balanceOf[msg.sender]),
            uint256(10)**decimals
        );
        dividendBalanceOf[destinationAddress] = div(
            mul(dividendPerToken, balanceOf[destinationAddress]),
            uint256(10)**decimals
        );
        emit Transfer(msg.sender, destinationAddress, tokensToTransfer);
        return true;
    }

    function extractEtherToInvest(uint256 _amount) public {
        updateSupport();
        require(support >= initialSupport);
        require(owner == msg.sender);
        uint256 amount = _amount;
        uint256 futureContractEtherBalance = contractAddress.balance - amount;
        uint256 contractEthersMinusSupport = futureContractEtherBalance -
            support;
        dividendPerToken = div(
            mul(contractEthersMinusSupport, (uint256(10)**decimals)),
            soldTokens
        );
        price = dividendPerToken;
        if (dividendPerToken < div(support, totalSupplyWithoutDecimals)) {
            uint256 minDividendPerToken = div(
                support,
                totalSupplyWithoutDecimals
            );
            dividendPerToken = minDividendPerToken;
            if (dividendPerToken < initialPrice) {
                dividendPerToken = initialPrice;
            }
            price = dividendPerToken;
        }
        require(contractAddress.balance - amount >= support);
        msg.sender.transfer(amount);
        emit EtherMovements(amount);
    }

    function creditEtherFromInvestings(uint256 _amount) public payable {
        updateSupport();
        require(owner == msg.sender);
        require(msg.value == _amount);
        uint256 contractEthersMinusSupport = contractAddress.balance - support;
        dividendPerToken = div(
            mul(contractEthersMinusSupport, (uint256(10)**decimals)),
            soldTokens
        );
        if (dividendPerToken < initialPrice) {
            dividendPerToken = initialPrice;
        }
        if (support < initialSupport) {
            if(support + msg.value <= initialSupport){
                support = support + msg.value;
            } else {
                support = initialSupport;
            }
        }
        price = dividendPerToken;
        uint256 amount = _amount;
        emit EtherMovements(amount);
    }
}
