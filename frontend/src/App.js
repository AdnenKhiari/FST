
import React from "react"
import {BrowserRouter as Router, Switch,Route} from "react-router-dom"
import * as ROUTES from "./Constants/routes"
import MainNav from "./Components/MainNav"
import Footer from "./Components/Footer"
import Home from "./Pages/Home"
import "./styles/base.scss"
function App() {
  return (<Router>
    <MainNav />
    <Switch>
      <Route exact path={ROUTES.HOME}>
          <Home />
      </Route>
      <Route exact path={ROUTES.LOGIN}>

      </Route>
      <Route exact path={ROUTES.HOME}>

      </Route>
      <Route exact path={ROUTES.SIGNUP}>

      </Route>
    </Switch>
    <Footer />
  </Router>)
}

export default App;
