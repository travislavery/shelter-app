import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SheltersPage from './containers/SheltersPage'
import ShelterNew from './containers/ShelterNew'
import ShelterShow from './containers/ShelterShow'
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
            <Route exact path='/shelters' component={SheltersPage} />
            <Route exact path='/login' component={LoginPage} />
            <Switch>
              <Route path={'/shelters/new'} component={ShelterNew} />
              <Route path={'/shelters/:shelterId'} component={ShelterShow} />
            </Switch>
          </Grid>
          <Grid>
            <Route exact path='/' component={Home}/>
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