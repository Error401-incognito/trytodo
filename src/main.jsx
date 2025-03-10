import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const lists = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true,
    completed: false
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    date: '2019-05-30T18:39:34.091Z',
    important: false,
    completed: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true,
    completed: false
  }
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <App list={lists} />
);
