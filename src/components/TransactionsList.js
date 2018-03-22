import React from 'react';
import FilterSort from './FilterSort';
import TransactionHeader from './TransactionHeader';
import TransactionRow from './TransactionRow';
//bottom division as table component & filter on it
export default class TransactionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type : '',
      by : ''
    };
    this._sortHandling = this._sortHandling.bind(this);
  }

  _sortHandling(type, by) {
    this.setState({
      type: type,
      by: by
    });
  }

  _processSorting(){
    const dataToSort = this.props.passingToChild;
    if(this.state.by === TransactionHeader.DATE){
      return this._sortByAmount(this.state.type, dataToSort);
    }
    return this._sortWithDate(this.state.type, dataToSort);
  }

  _sortWithDate(type, dataToSort) {
    const finalResult = dataToSort.sort((transaction, otherTransaction) => {
      return new Date(transaction.date) - new Date(otherTransaction.date);
    });

    if (type === FilterSort.ASCENDING) {
      return finalResult;
    }
    return finalResult.reverse();
  }

  _sortByAmount(type, dataToSort) {
    const finalResult = dataToSort.sort((transaction, otherTransaction) => {
      return Number(transaction.amount) - Number(otherTransaction.amount);
    });

    if (type === FilterSort.ASCENDING) {
      return finalResult;
    }
    return finalResult.reverse();
  }

  render() {
    const dataToRender = this._processSorting();
    return (
        <div className="col-md-12 all-padding-5px transaction-card-division no-padding-left-right">
          <div className="card card-no-radius">
            <h5 className="card-header card-header-transparent no-padding-left-right">
              <span className="background-it shadow-it">Transaction</span>
              <span className="color-white"> list</span>
            </h5>
            <div className="card-body no-padding-left-right">
              <table className="table table-hover table-transaction-white shadowing">
                <thead>
                <TransactionHeader callBackTransactionSort={this._sortHandling}/>
                </thead>
                <tbody>
                {dataToRender.map(
                    (transactionDatum, index) => <TransactionRow key={index} transactionDatum={transactionDatum}/>)}
                </tbody>
              </table>
              <span className="line-result"/>
            </div>
          </div>
        </div>
    );
  }
}