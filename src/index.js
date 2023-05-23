import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from './redux/store';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter basename='/goit-react-practice-02-phonebook'>
    <Provider store={store}>
       <App />
    </Provider>
   </BrowserRouter>
   </React.StrictMode>
);
