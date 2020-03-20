import React from 'react';
import Home from './pages/Home/Home';
import Playground from './pages/Playground/Playground';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { auth, createUserProfileDocument} from './firebase/firebase.utils';
import SignOut from './components/sign-out/sign-out.component';
import {SignInPage} from './pages/SignIn/SignIn';
import './App.css';
import {SignUpPage} from './pages/SignUp/SignUp';
import ProfilePage from './pages/Profile/Profile';
import { LandingPage } from './pages/Landing/Landing';

class App extends React.Component {
    constructor() {
      super();

      this.state = {
        currentUser: null,
        userRef: null
      };
    }

    unsubscribeFromAuth = null;


    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
          if (userAuth) {
            const userRef = await createUserProfileDocument(userAuth);
            console.log(userRef);
            userRef.onSnapshot(snapShot => {
              this.setState({
                currentUser: {
                  id: snapShot.id,
                  ...snapShot.data()
                },
                userRef: userRef,
              },
              );
              console.log(this.state);
            });
          }

          this.setState({ currentUser: userAuth });
        });
      }

    componentWillUnmount() {
      this.unsubscribeFromAuth();
    }




    render () {

        return (

        <Router>
            <SignOut currentUser={this.state.currentUser}/>
            <Switch>
        <Route exact path='/playground' component={() => <Playground userRef={this.state.userRef} currentUser={this.state.currentUser}/>}/>
            <Route exact path='/' component={Home} />
            <Route exact path='/landing' component={LandingPage} />
            <Route exact path='/login' component={SignInPage} />
            <Route exact path='/sign-up' component={SignUpPage} />
            <Route exact path='/profile' component={() => <ProfilePage currentUser={this.state.currentUser} userRef={this.state.userRef}/>} />
            </Switch>
        </Router>


        );
    }
}

export default App;