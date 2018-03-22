import React from 'react';
import UserFilter from './UserFilter';
//right division as user input & current balance component
export default class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeAmount = this.onChangeAmount.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeOption = this.onChangeOption.bind(this);
    this.onclickAddTransaction = this.onclickAddTransaction.bind(this);
    this.state = {
      amount: '',
      description: '',
      date: '',
      option: '',
    };
  }

  onChangeAmount(event) {
    this.setState({ amount: event.target.value });
  }

  onChangeDescription(event) {
    this.setState({ description: event.target.value });
  }

  onChangeDate(event) {
    this.setState({ date: event.target.value });
  }

  onChangeOption(event) {
    this.setState({ option: event.target.value });
  }

  onclickAddTransaction() {
    const transactionDatum = {
      amount: this.state.amount,
      description: this.state.description,
      date: this.state.date,
      option: this.state.option,
    };
    this.props.onclickAddTransaction(transactionDatum);
  }

  render() {
    return (
        <div className="col-md-9 all-padding-5px card-division user-form-division">
          <div className="card card-no-radius user-form-transparent">
            <h5 className="card-header card-header-transparent"><span className="background-it shadow-it"> Manage</span> <span
                className="color-white">transaction</span></h5>
            <div className="card-body">
              <div className="row">
                <form className="form-inline width-max" action="#">
                <div className="input-group margin-left-5px padding-top-2px">
                  <input onChange={this.onChangeAmount} id="input-amount" type="number"
                         className="form-control form-custom"
                         placeholder="insert your ammount"/>
                  <div className="input-group-append">
                    <span className="input-group-text input-append-custom background-it">$</span>
                  </div>
                </div>
                <div className="input-group margin-left-10px padding-top-2px float-label-control">
                  <input onChange={this.onChangeDescription} id="input-description" type="text"
                         className="form-control form-custom"
                         placeholder="insert your description"/>
                </div>
                <div className="input-group margin-left-10px padding-top-2px">
                  <input onChange={this.onChangeDate} id="input-date" type="date"
                         className="form-control form-custom lite-bottom-pad"
                         placeholder="input your date"/>
                </div>
                <div className="input-group margin-left-10px padding-top-2px">
                  <div className="input-group-btn">
                    <div className="input-group-append">
                      <button onClick={this.onclickAddTransaction} id="add-transaction"
                              className="btn btn-info"
                              type="button">add
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              </div>
              <div className="row padding-top-2px">
                <UserFilter callBackUserFilter={this.props.callBackFunction}/>
              </div>
            </div>
          </div>
        </div>
    );
  }
}