import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import FriendsList from "./components/FriendsList";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" render={(props) => <Login {...props} />} />
        <PrivateRoute path="/protected" component={FriendsList} />
      </Switch>
    </div>
  );
}

export default App;