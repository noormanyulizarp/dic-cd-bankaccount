import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserForm from '../components/UserForm';
import 'jsdom-global/register';

Enzyme.configure({ adapter: new Adapter() });

describe('UserForm', function() {
  describe('#onChangeAmount', function() {
    it('should return 90', function() {
      const userForm = shallow(<UserForm/>);
      const inputName = userForm.find('#input-amount');
      inputName.simulate('change', {
        target: {
          value: '90',
        },
      });
      expect(userForm.state('amount')).toBe('90');
    });

    it('should return 80', function() {
      const userForm = shallow(<UserForm/>);
      const inputName = userForm.find('#input-amount');
      inputName.simulate('change', {
        target: {
          value: '80',
        },
      });
      expect(userForm.state('amount')).toBe('80');
    });
  });

  describe('#onChangeDescription', function() {
    it('should return paypall', function() {
      const userForm = shallow(<UserForm/>);
      const inputName = userForm.find('#input-description');
      inputName.simulate('change', {
        target: {
          value: 'PayPall',
        },
      });
      expect(userForm.state('description')).toBe('PayPall');
    });

    it('should return jenius', function() {
      const userForm = shallow(<UserForm/>);
      const inputName = userForm.find('#input-description');
      inputName.simulate('change', {
        target: {
          value: 'Jenius',
        },
      });
      expect(userForm.state('description')).toBe('Jenius');
    });
  });

  describe('#onChangeDate', function() {
    it('should return paypall', function() {
      const userForm = shallow(<UserForm/>);
      const inputName = userForm.find('#input-date');
      inputName.simulate('change', {
        target: {
          value: '22/12/2018',
        },
      });
      expect(userForm.state('date')).toBe('22/12/2018');
    });

    it('should return jenius', function() {
      const userForm = shallow(<UserForm/>);
      const inputName = userForm.find('#input-date');
      inputName.simulate('change', {
        target: {
          value: '24/12/2018',
        },
      });
      expect(userForm.state('date')).toBe('24/12/2018');
    });
  });

  describe('#onChangeOption', function() {
    it('should return true when ', function() {
      const userForm = shallow(<UserForm/>);
      const inputName = userForm.find('#optionIncome');
      inputName.simulate('change', {
        target: {
          value: 'in',
        },
      });
      expect(userForm.state('option')).toBe('in');
    });

    it('should return jenius', function() {
      const userForm = shallow(<UserForm/>);
      const inputName = userForm.find('#optionOutcome');
      inputName.simulate('change', {
        target: {
          value: 'out',
        },
      });
      expect(userForm.state('option')).toBe('out');
    });
  });

  describe('#onclickAddTransaction', () => {
    it('should call parent onclickAddTransaction function', function() {
      const parentFunction = jest.fn();
      const userFormWrapper = shallow(<UserForm onclickAddTransaction={parentFunction}/>);
      const userFormInput = {
        amount: '90',
        description: 'PayPal',
        date: '12/12/2018',
        option: 'in'
      };
      userFormWrapper.setState(userFormInput);
      const btnAdd = userFormWrapper.find('#add-transaction');
      btnAdd.simulate('click');
      expect(parentFunction).toBeCalled();
      expect(parentFunction).toBeCalledWith(userFormInput);
    });
    it('should call parent onclickAddTransaction function', function() {
      const parentFunction = jest.fn();
      const userFormWrapper = shallow(<UserForm onclickAddTransaction={parentFunction}/>);
      const userFormInput = {
        amount: '50',
        description: 'Visa',
        date: '13/12/2018',
        option: 'out'
      };
      userFormWrapper.setState(userFormInput);
      const btnAdd = userFormWrapper.find('#add-transaction');
      btnAdd.simulate('click');
      expect(parentFunction).toBeCalled();
      expect(parentFunction).toBeCalledWith(userFormInput);
    });
  });
});