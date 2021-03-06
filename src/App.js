import React, { useEffect } from "react";
import Playground from "./pages/Playground/Playground";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import SignOut from "./components/sign-out/sign-out.component";
import "./App.css";
import Home from "./pages/Home/Home";
import ProfilePage from "./pages/Profile/Profile";
import { useDispatch, useSelector } from "react-redux";
import { currentUser, userRef } from "./actions";
import { HomeNav } from "./components/home-nav-bar/home-nav-bar.component";

const App = () => {
  let unsubscribeFromAuth = null;
  const currentUserState = useSelector(state => state.currentUser);
  const userRefState = useSelector(state => state.userRef);
  const dispatch = useDispatch();

  useEffect(() => {
    //didmount
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRefAuth = await createUserProfileDocument(userAuth);
        userRefAuth.onSnapshot(snapShot => {
          dispatch(
            currentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
          );
          dispatch(userRef(userRefAuth));
        });
      } else {
        dispatch(currentUser(null));
      }
    });
    // unmount
    return () => {
      unsubscribeFromAuth(); /*log out of user */
    };
  }, [userRef, currentUser]);

  return (
    <Router>
      <Switch>
        <Route exact path="/playground" component={Playground} />
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/profile" component={ProfilePage} />
      </Switch>
    </Router>
  );
};

export default App;
