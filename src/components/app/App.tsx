import React, { ChangeEventHandler, MouseEventHandler, useState } from 'react';
import styles from './App.module.css';
import Header from "../header/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from '../pages/HomePage';
import GamePage from '../games/GamePage';
import DealPage from '../deals/DealPage';


const App = () => {
  return (
    <Router>
    <div>
      <Header/>
      <div className={styles.container}>
      <Switch>
        <DealPage/>
        <Route path="/list">
          <GamePage/>
        </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
