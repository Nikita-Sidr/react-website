import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from './redux/state';
import { BrowserRouter} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
      <App updateNewMessageText={updateNewMessageText} addMessage={addMessage} state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
      </BrowserRouter>
    )
  reportWebVitals();
}
