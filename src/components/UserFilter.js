import React from 'react';
//filter user list transaction collection
export default class UserFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: UserFilter.LESSER,
      filterValue: '',
    };
    this._changeFilterLabel = this._changeFilterLabel.bind(this);
    this._changeFilterInput = this._changeFilterInput.bind(this);
  }

  _changeFilterLabel(event) {
    this.setState({
      label: event.target.value,
    });
  }

  _changeFilterInput(event) {
    this.props.callBackUserFilter(this.state.label, event.target.value);
  }

  render() {
    return (
        <form action="#" className="width-max">
          <div className="input-group margin-left-5px padding-top-2px">
            <div className="input-group-btn">
              <select className="selectpicker custom-select" onChange={this._changeFilterLabel}>
                <option value={UserFilter.LESSER}>{UserFilter.LESSER}</option>
                <option value={UserFilter.GREATER}>{UserFilter.GREATER}</option>
              </select>
            </div>
            <input onChange={this._changeFilterInput} type="text"
                   className="form-control form-custom margin-left-5px"
                   aria-label="Text input with dropdown button"
                   placeholder="insert your filter value here"
            />
          </div>
        </form>
    );
  }
}

UserFilter.LESSER = 'lesser';
UserFilter.GREATER = 'greater';