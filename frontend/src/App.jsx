import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { Home } from './pages/Home.jsx'
import { Favorites } from './pages/Favorites.jsx'
import { NavBar } from './cmps/NavBar.jsx'
import './assets/styles/global.scss';

function _App(props) {
  return (
    <div className="App">
      <header className="App-header inner-box">
        <div className="flex align-center header-div">
          <h1>MeTube - Make Your PlayList</h1>
        </div>
        <div>
          <NavBar />
        </div>
      </header>
      <main>
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={Favorites} exact path="/favorites" />
        </Switch>
      </main>
    </div >
  );
}

const mapStateToProps = state => {
  return {
  }
}

export const App = connect(mapStateToProps)(_App)