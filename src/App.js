import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SheltersPage from './containers/SheltersPage'
import ShelterNew from './containers/ShelterNew'
import ShelterShow from './containers/ShelterShow'
import LoginPage from './containers/LoginPage'
import SocialMediaLinks from './components/SocialMediaLinks'
import {fetchUser} from './actions/user'
import {Grid} from 'react-bootstrap'
import NavBar from './components/NavBar'
import Home from './containers/Home'
//import './App.css';

class App extends Component {
  componentDidMount = () => {
    this.props.fetchUser()
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar user={this.props.user}/>
          <Route exact path='/' component={Home}/>
          <Grid>
            <Route exact path='/shelters' component={SheltersPage} />
            <Route exact path='/login' component={LoginPage} />
            <Switch>
              <Route path={'/shelters/new'} component={ShelterNew} />
              <Route path={'/shelters/:shelterId'} component={ShelterShow} />
            </Switch>
          </Grid>
          
          <Grid>
            <SocialMediaLinks />
          </Grid>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {fetchUser})(App);


// <header className="App-header">
//         </header>