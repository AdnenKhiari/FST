import React from "react"
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import * as ROUTES from "./Constants/routes"
import MainNav from "./Components/MainNav"
import Footer from "./Components/Footer"
import Home from "./Pages/Home"
import Test from "./Pages/Test"
import Education from "./Pages/Education"
import Posts from "./Pages/Posts"
import Article from "./Pages/Article"
import News from "./Pages/News"
import "./styles/base.scss"
function App() {
  return (
  <Router>
    <MainNav />
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path="/test" element={<Test />} />
      <Route path={ROUTES.HOME} >
        <Route path={ROUTES.LOGIN} />
        <Route path={ROUTES.SIGNUP} />
        <Route path={ROUTES.EDUCATION} element={<Education />} />
        <Route path={ROUTES.POSTS} element = {<Posts />} />
        <Route path={ROUTES.ARTICLE(0)} element = {<Article />} />
        <Route path={ROUTES.NEWS} element = {<News />} />
      </Route>
    </Routes>
    <Footer />
  </Router>)
}

export default App;
