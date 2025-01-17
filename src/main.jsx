// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import store from './app/store'; // Path to your store
// import App from './App';

// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('root')
// );


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import store from './app/store'; // Path to your store
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
