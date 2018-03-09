import React, { Component } from 'react';
import logo from './ga.png';
import SavingAccount from './SavingAccount';
import Account from './Account';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      savingBalance: 0,
      checkingBalance: 0
    }
  }

  handleDepositClick = (e, amount, name) => {
    e.preventDefault();
    console.log(amount);
    console.log(amount);
    if (isNaN(amount)) {
      console.log('isNan()',amount,name);
    } else if (amount <= 0){
      console.log('amount <=0',amount,name);
      amount === 0 ? console.log('Must deposit more than $0') : console.log("You can't deposit a negative number")
    } else if (amount !== undefined) {
      console.log('amount is defined',amount,name);

      let newBalance = 0
      if(name==="Checking"){
        newBalance = this.state.checkingBalance + +amount
        console.log(newBalance, 'checking');
        this.setState({
          checkingBalance: newBalance
        })
      } else {
        newBalance = this.state.savingBalance + +amount
        console.log(newBalance, 'saving');
        this.setState({
          savingBalance: newBalance
        })
      }
      // this.refs.amount.value = '';
    }
  }

  handleWithdrawalClick = (e, amount, name) => {
    e.preventDefault();
    if (isNaN(amount)) {
      console.log('isNan()',amount,name);
    } else if (amount <= 0){
      console.log('amount <=0',amount,name);
      amount === 0 ? console.log('Must deposit more than $0') : console.log("You can't deposit a negative number")
    } else if (amount){
      console.log('amount is defined',amount,name);
      let newBalance = 0

      if(name==="Checking"){
        newBalance = +this.state.checkingBalance - +amount
        this.setState({
          checkingBalance: newBalance
        })
      } else {
        newBalance = +this.state.savingBalance - +amount
        this.setState({
          savingBalance: newBalance
        })
      }
      // this.refs.amount.value = '';
    }
  }
  transferLogic = (e,amount,name) => {
    let transferTo = ''
    name === 'Checking' ? transferTo = "saving" : transferTo = "checking"
    this.handleWithdrawalClick(e,amount,name)
    let balance = `${transferTo}Balance`
    let currentBalance = this.state[balance]
    this.setState({
      [balance]: currentBalance + +amount
    })
  }
  transfer = (e, amount, name) => {
    if (name === 'Saving'){
      this.transferLogic(e,amount,name)
    } else {
      this.transferLogic(e,amount,name)
    }
  }

  render() {
    return (
      <div id="content">
        <div id="nav">
          <div id="logo"><img src={logo} alt="General Assembly logo" /></div>
          <div id="title">Bank of GA</div>
        </div>

        <Account name="Checking"
          handleDepositClick={this.handleDepositClick}
          handleWithdrawalClick={this.handleWithdrawalClick}
          tranfer={this.transfer}
          balance={this.state.checkingBalance}
        />

        <SavingAccount name="Saving"
          handleDepositClick={this.handleDepositClick}
          handleWithdrawalClick={this.handleWithdrawalClick}
          tranfer={this.transfer}
          balance={this.state.savingBalance}
        />

        <div className="clear"></div>
      </div>
    );
  }
}

export default App;
