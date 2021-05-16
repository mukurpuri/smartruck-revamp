import React from 'react';
import { PersistGate } from 'redux-persist/es/integration/react'
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Sidebar from './components/sidebar';
import Content from './components/content';
import { store, persistor } from './redux/store/store';
import './App.scss';
import './styles/main.scss';
import { faUndo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function App() {
  return (
    <Provider store={store}>
      <PersistGate 
        loading={null}
        persistor={persistor}
      >
      <div className="App">
      <div class="header">
        <img class="logo" src="./smartruck-logo.svg"/>
        <FontAwesomeIcon class="icon" icon={faUndo} />
      </div>
        <div class="main">
          <div class="sidebar">
            <Sidebar/>
          </div>
          <div class="content">
            <Content/>
          </div>
        </div>
      </div>
      </PersistGate>
    </Provider>
  );
}

export default App;