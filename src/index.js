import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
  { id: 1, message: 'Hello, how is your day? =)', likesCount: 15 },
  { id: 2, message: "It's my second post!", likesCount: 20 },
  { id: 2, message: "Additional test on update with map", likesCount: 1 }
]

let dialogsData = [
  { id: 1, name: 'Nick' },
  { id: 2, name: 'Oleg' },
  { id: 3, name: 'Rodion' },
  { id: 4, name: 'Vlad' },
  { id: 5, name: 'Viktor' },
  { id: 6, name: 'Valera' }
]

let messagesData = [
  { id: 1, message: 'Hello!' },
  { id: 2, message: 'How are you?' },
  { id: 3, message: "What's new on your React website?" }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>
)
reportWebVitals();
