import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
 let rerenderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
      <App dispatch={store.dispatch.bind(store)} state={state}/>
      </BrowserRouter>
    )
  reportWebVitals();
}
rerenderEntireTree(store._state)
store.subscribe(rerenderEntireTree)
