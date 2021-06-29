import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

// Importing pages
import HomePage from "./pages/home-page/home-page.component";
class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
