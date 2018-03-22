import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/font-awesome/css/font-awesome.css';
import '../node_modules/font-awesome-animation/dist/font-awesome-animation.css';
import './style/index.css';
import BankWallet from './components/BankWallet';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BankWallet/>, document.getElementById('root'));
registerServiceWorker();