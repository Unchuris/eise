import React from 'react';
import ReactDOM from 'react-dom';
import Completed from './Completed';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Completed />, div);
});
