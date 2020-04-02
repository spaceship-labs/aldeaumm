import React from "react"
import ReactDOM from "react-dom"
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"

import "./theme/layout.css"
import HomeContainer from "./containers/home"

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/en'><HomeContainer lang='en' /></Route>
        <Route path='/'><HomeContainer lang='es' /></Route>
      </Switch>
    </Router>
  )
}

const rootElement = document.getElementById("app")

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<App />, rootElement)
} else {
  ReactDOM.render(<App />, rootElement)
}
