import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Saved from "./pages/saved";
import SearchBooks from "./pages/Books";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={SearchBooks} />
          <Route exact path="/SearchBooks" component={SearchBooks} />
          {/* <Route exact path="/Saved/:id" component={Saved} /> */}
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

