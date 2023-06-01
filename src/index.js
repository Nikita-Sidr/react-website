import store from './redux/redux-store';
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
      <App store = {store} state={state}/>
      </BrowserRouter>
    )
  reportWebVitals();
}
rerenderEntireTree(store.getState())


store.subscribe( () => {
  let state = store.getState()
  rerenderEntireTree(state)
})
