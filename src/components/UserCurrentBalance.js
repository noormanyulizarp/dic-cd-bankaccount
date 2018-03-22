import React from 'react';
//detail part of user activity
export default class UserCurrentBalance extends React.Component {
  render() {
    return (
        <span id="current-balance-pritn"className="color-white">{this.props.passingAccountBalanceToChild}</span>
    );
  }
}