import React from "react";
import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Welcomepage from "./components/Welcomepage";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/welcomepage">
            <Welcomepage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
