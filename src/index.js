import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/css/main.css'
import './assets/css/LineIcons.3.0.css'
import { StateProvider } from './Context/StateProvider';
import reducer, { initialState } from './Context/reducer';


ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
