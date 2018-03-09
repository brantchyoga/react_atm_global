import React, { Component } from 'react';

export default class SavingAccount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      balance: 0
    }
  }


  render() {
    let balanceClass = 'balance';
    if (this.state.balance === 0) {
      balanceClass += ' zero';
    }

    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={balanceClass}>${this.props.balance}</div>
        <input type="text" placeholder="enter an amount" ref="amount" />
        <input type="button" value="Deposit" onClick={(e) => this.props.handleDepositClick(e, this.refs.amount.value, this.props.name)} />
        <input type="button" value="Withdrawal" onClick={(e) => this.props.handleWithdrawalClick(e, this.refs.amount.value, this.props.name)} />
        <div>
          <input type="button" value="transfer" onClick={this.handleShit} />
        </div>
      </div>
    )
  }
}
