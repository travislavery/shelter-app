import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import SheltersPage from './containers/shelters/SheltersPage'
import ShelterNew from './containers/shelters/ShelterNew'
import ShelterShow from './containers/shelters/ShelterShow'
import ErrorModal from './components/ErrorModal'
import LoginPage from './containers/user/LoginPage'
import SocialMediaLinks from './components/user/SocialMediaLinks'
import {fetchUser, verifyLocalUser} from './actions/user'
import {fetchShelters} from './actions/shelters'
import {fetchItems} from './actions/items'
import decode from 'jwt-decode'
import {Grid} from 'react-bootstrap'
import NavBar from './components/navbar/NavBar'
import Home from './containers/Home'
//import './App.css';

const checkAuth = () => {
  const token = localStorage.getItem('authentication_token')
  const email = localStorage.getItem('email')
  if (!token || !email) {
    return false
  }

  if (token==="undefined" || email==="undefined"){
    return false
  }

  return true
}

class App extends Component {
  componentDidMount = () => {
    this.props.fetchItems()
    this.props.fetchShelters()
    const token = localStorage.getItem('authentication_token')
    const email = localStorage.getItem('email')

    if (checkAuth()){
      this.props.verifyLocalUser(email, token)
    }
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar user={this.props.user}/>
          <Route exact path='/' component={Home}/>
          <ErrorModal/>
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
  console.log(state)
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps, {fetchUser, fetchShelters, fetchItems, verifyLocalUser})(App);


// <header className="App-header">
//         </header>