import React from "react"
import ReactDOM from "react-dom"
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import "./theme/layout.css"
import HomeContainer from "./containers/home"

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/'><HomeContainer /></Route>
            </Switch>
        </Router>
    );
}

const rootElement = document.getElementById("app");
//ReactDOM.render(<App />, rootElement);
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<App />, rootElement);
} else {
  ReactDOM.render(<App />, rootElement);
}