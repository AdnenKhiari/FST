
import React from "react"
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import * as ROUTES from "./Constants/routes"
import MainNav from "./Components/MainNav"
import Footer from "./Components/Footer"
import Home from "./Pages/Home"
import Test from "./Pages/Test"
import Posts from "./Pages/Posts"
import "./styles/base.scss"
function App() {
  return (
  <Router>
    <MainNav />
    <Routes>
      <Route  path={ROUTES.HOME} element={<Home />} />
      <Route  path="/test" element={<Test />} />
      <Route  path={ROUTES.LOGIN} />
      <Route  path={ROUTES.HOME} >
        <Route  path={ROUTES.POSTS} element = {<Posts />} />
      </Route>
      <Route  path={ROUTES.SIGNUP} />
    </Routes>
    <Footer />
  </Router>)
}

export default App;
