import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import SheltersPage from './containers/SheltersPage'
import {Grid} from 'react-bootstrap'
import NavBar from './components/NavBar'
import Home from './containers/Home'
//import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Grid>
            <Route exact path='/' component={Home}/>
          </Grid>
          <Grid>
            <Route exact path='/shelters' component={SheltersPage} />
          </Grid>
          <Grid>
            <h1>Nope</h1>
          </Grid>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, {})(App);


// <header className="App-header">
//         </header>