import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BankAccount from '../components/BankWallet';
import 'jsdom-global/register';

Enzyme.configure({ adapter: new Adapter() });

describe('', function() {
  describe('#render', () => {
    it('display the contact Noorman with number 0366', function() {
      const contactsWrapper = mount(<BankAccount/>);
      const contactValues = [ { name: 'Noorman', number: '0366' } ];
      contactsWrapper.setState({
        contacts: contactValues,
      });
      const contactRow = contactsWrapper.find('tbody tr td');
      expect(contactRow.at(0).text()).toEqual('Noorman');
      expect(contactRow.at(1).text()).toEqual('0366');
    });

    it('display two rows when input 2 contacts ', function() {
    });
  });
  describe('#sumCurrentBalance', () => {
    it('when add $1 it should return true', function() {
      const bankAcountWrapper = mount(<BankAccount/>);
      const bankAcountValues = [{
        amount: 1,
        description: 'one',
        date: '22/12/2018',
        option: ''
      }]
      bankAcountWrapper.setState({
        transactionList: bankAcountValues
      });
      const currentBalance = bankAcountWrapper.find('user-utility-division card-body current-balance-pritn');
      expect(currentBalance.text()).toEqual('Current Balance: $1');
    });
  });
});