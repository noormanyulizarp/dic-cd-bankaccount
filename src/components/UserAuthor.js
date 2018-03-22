import React from 'react';
import UserImage from '../asset/user.png';
import UserCurrentBalance from './UserCurrentBalance';
//left as user component and notification component
export default class UserAuthor extends React.Component {
  render() {
    return (
        <div className="col-md-3 all-padding-5px card-division user-utility-division">
          <div className="card card-no-radius card-blur user-utility-color">
            <h5 className="card-header card-header-transparent text-center">Hello <span
                className="color-white">Stranger</span></h5>
            <img className="card-img-top rounded-circle mx-auto d-block user-image margin-top-5px"
                 src={UserImage}/>
            <div className="card-body text-center">
              <span className="background-it">Current Balance:</span> <span className="color-white">$</span><UserCurrentBalance passingAccountBalanceToChild={this.props.passAccountBalance}/>
              <br/>
              <i className="fa fa-envelope faa-horizontal animated-hover"/>
              <i className="fa fa-bell faa-ring animated margin-left-5px"/>
              <i className="fa fa-power-off margin-left-5px"/>
            </div>
          </div>
        </div>
    );
  }
}