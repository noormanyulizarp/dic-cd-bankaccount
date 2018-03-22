import React from 'react';
//detail part of user activity
export default class TransactionRow extends React.Component {
  render() {
    return (
        <tr>
          <th scope="row">-</th>
          <td>${this.props.transactionDatum.amount}{this.props.transactionDatum.option}</td>
          <td>{this.props.transactionDatum.description}</td>
          <td>{this.props.transactionDatum.date}</td>
        </tr>
    );
  }
}