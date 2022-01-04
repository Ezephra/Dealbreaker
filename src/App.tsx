import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { GamePage, InitialPage, DealPage, ContactPage } from './pages';
import { Header, Footer} from './components';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header/>
      <div className='gradient__bg'>
        <Switch>
        <Route exact path="/">
          <InitialPage/>
        </Route>
        <Route exact path="/deals">
          <DealPage/>
        </Route>
        <Route path="/games">
          <GamePage/>
        </Route>
        <Route path="/contact-me">
          <ContactPage/>
        </Route>
      </Switch>
      </div>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
