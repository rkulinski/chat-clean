import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Profile from "./pages/Profile";
import ChatContainer from "./pages/ChatContainer";
import Navbar from "./pages/Navbar";
import Page404 from "./pages/Page404";
import PureRedux from "./pages/PureRedux";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <div className="Routes">
            <Switch>
              <Route exact path="/">
                <Redirect to="/profile" />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/chat-container">
                <ChatContainer />
              </Route>
              <Route path="/pure-redux">
                <PureRedux />
              </Route>
              <Route path="*">
                <Page404 />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
