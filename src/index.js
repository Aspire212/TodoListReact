import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/index.jsx'

const firstTasks = [
  {
    text: 'Learn JS',
    id: 0,
    status: false,
    important: false,
  },
  {
    text: 'Learn React',
    id: 1,
    status: false,
    important: false,
  },
  {
    text: 'Learn Redux',
    id: 2,
    status: false,
    important: false,
  }
]




ReactDOM.render(
  <App firstTasks={ firstTasks } />,
  document.getElementById('react-app')
);
