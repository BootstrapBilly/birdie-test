import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from '@App/store';
import { shallow, configure  } from 'enzyme';
import { FetchButton } from '../FetchButton';
import * as Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    ,
    div);
});

it('Fetch button fires a function off', () => {

  const mockCallBack = jest.fn();

  const button = shallow((<FetchButton fetchRecords={mockCallBack} />));
  button.find('button').simulate('click');
  expect(mockCallBack.mock.calls.length).toEqual(1);
});
