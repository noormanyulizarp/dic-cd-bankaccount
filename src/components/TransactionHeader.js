import React from 'react';
import FilterSort from './FilterSort';
//control for transaction header
export default class TransactionHeader extends React.Component {
  constructor(props){
    super(props);
    this._sortHeaderHandler = this._sortHeaderHandler.bind(this);
  }

  _sortHeaderHandler(sortMethod,sortBy){
    this.props.callBackTransactionSort(sortMethod, sortBy);
  }

  render() {
    return (
        <tr>
          <th className="border-th-left-right">#</th>
          <th className="border-th-right">{TransactionHeader.AMOUNT}
            <FilterSort sortBy={TransactionHeader.AMOUNT} callBackSort={this._sortHeaderHandler}/>
          </th>
          <th className="border-th-right">Description
          </th>
          <th className="border-th-right">{TransactionHeader.DATE}
            <FilterSort sortBy={TransactionHeader.DATE} callBackSort={this._sortHeaderHandler}/>
          </th>
        </tr>
    );
  }
}

TransactionHeader.AMOUNT = 'Amount';
TransactionHeader.DATE = 'Date';