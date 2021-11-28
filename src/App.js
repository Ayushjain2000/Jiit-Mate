import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Login from "./components/auth/Login";
import Mate from "./components/mate";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import { Route, Switch } from 'react-router-dom';
import Profile from "./components/pages/profile/Profile";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
            displayName: authUser.displayName,
            photo: authUser.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
      console.log(authUser);
    });
  }, [dispatch]);
  return <div className="App">
    <Switch>
      <Route path='/profile'>
        <Profile />
      </Route>
      <Route path='/'>
        {user ? <Mate /> : <Login />}
      </Route>
    </Switch>
  </div>;
}

export default App;