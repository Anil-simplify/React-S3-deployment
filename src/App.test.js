import { render, screen } from '@testing-library/react';
import App from './Components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers  from './reducers/initial_reducer.js';
import { BrowserRouter } from 'react-router-dom';

test('there should be a Login Button', () => {
  render(
    <BrowserRouter>
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>
  </BrowserRouter>
  )
  const myButton = screen.getByRole("button",{name: 'Login'})
  expect(myButton).toHaveTextContent("Login")
});

test('there should be a Home Tab', () => {
  render(
    <BrowserRouter>
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>
  </BrowserRouter>
  )
  const myTab = screen.getByRole("tab",{name: 'Home'})
  expect(myTab).toHaveTextContent("Home")
});
