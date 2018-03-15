import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import SheltersPage from './containers/shelters/SheltersPage'
import ShelterNew from './containers/shelters/ShelterNew'
import ShelterShow from './containers/shelters/ShelterShow'
import LoginPage from './containers/user/LoginPage'
import SocialMediaLinks from './components/user/SocialMediaLinks'
import {fetchUser} from './actions/user'
import {fetchShelters} from './actions/shelters'
import decode from 'jwt-decode'
import {Grid} from 'react-bootstrap'
import NavBar from './components/navbar/NavBar'
import Home from './containers/Home'
//import './App.css';

// const checkAuth = () => {
//   const token = localStorage.getItem('token')
//   const refreshToken = localStorage.getItem('refreshToken')
//   if (!token || !refreshToken) {
//     return false
//   }

//   try {
//     const {exp} = decode(refreshToken)

//     if (exp < new Date().getTime()/1000) {
//       return false
//     }
//   } catch (e) {
//     return false
//   }

//   return true
// }

// const AuthRoute = ({ component: Component, ...rest}) => (
//   <Route {...rest} render={props => (
//     checkAuth() ? (
//       <Component {...props} />
//     ) : (
//       <Redirect to={{pathname: '/login'}} />
//     )
//   )} />
// )
// <AuthRoute exact path='/auth' component={Auth} />

class App extends Component {
  componentDidMount = () => {
    this.props.fetchUser()
    this.props.fetchShelters()
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

export default connect(mapStateToProps, {fetchUser, fetchShelters})(App);


// <header className="App-header">
//         </header>