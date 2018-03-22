import React from 'react';
import TransactionsList from './TransactionsList';
import UserFilter from './UserFilter';
import UserAuthor from './UserAuthor';
import UserForm from './UserForm';

//Parent for bank table list transaction and user component also transaction form
export default class BankWallet extends React.Component {
  constructor(props) {
    super(props);
    this.onclickAddTransaction = this.onclickAddTransaction.bind(this);
    this.filterByCriteria = this.filterByCriteria.bind(this);
    this._flterProcess = this._flterProcess.bind(this);
    this.state = {
      transactionList: [],
      filterLabel: '',
      filterInput: '',
      currentBalance :'',
    };
  }

  onclickAddTransaction(transactionDatum) {
    const before = this.state.currentBalance;
    const updateval = transactionDatum.amount;
    const result = Number(before) + Number(updateval);
    this.setState({
      transactionList: [ transactionDatum, ...this.state.transactionList ],
      currentBalance : result
    });
  }

  filterByCriteria(label, filterValue) {
    console.log(label + ' / ' + filterValue);
    this.setState({
      filterLabel: label,
      filterInput: filterValue,
    });
  }

  _flterProcess() {
    const tempTransactionList = this.state.transactionList;
    const filterResult = tempTransactionList.filter((transaction) => {
      let resultValue = Number(transaction.amount) >= Number(this.state.filterInput);
      if (this.state.filterLabel === UserFilter.LESSER) {
        resultValue = Number(transaction.amount) <= Number(this.state.filterInput);
      }
      return transaction.description.toLowerCase().includes(this.state.filterInput.toLowerCase()) ||
          resultValue;
    });
    return filterResult;
  }

  _sumCurrentBalance(){
    return this.state.currentBalance;
  }

  render() {
    const currentBalance = this._sumCurrentBalance();
    const filteredTransactionList = this._flterProcess();
    return (
        <main className="bank-account__div-component">
          <div className="container padding-top-bottom">
            <div className="row red-blouse all-padding-5px">
              <UserAuthor passAccountBalance={currentBalance}/>
              <UserForm onclickAddTransaction={this.onclickAddTransaction}
                        callBackFunction={this.filterByCriteria}/>
            </div>
            <div className="row transaction-nest">
              <TransactionsList passingToChild={filteredTransactionList}/>
            </div>
          </div>
        </main>
    );
  }
}