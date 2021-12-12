import {Link } from "react-router-dom"
import "./../styles/MainNav.scss"
import * as ROUTES from "./../Constants/routes"
const MainNav = ()=>{
    return <div className="main-nav-container">
     <div className="main-nav-inner-container">
        <img src="images/fstlogo.png" alt="fstlogo" />
        <nav>
            <ul>
                <li><Link to={ROUTES.HOME}>Home</Link></li>
                <li><Link to={ROUTES.ARTICLE(0 /*supposer latricle de la page d'inscri*/ )}>Admission</Link></li>
                <li><Link to={ROUTES.EDUCATION}>Education</Link></li>
                <li><Link to={ROUTES.NEWS}>News</Link></li>
                <li><Link to={ROUTES.POSTS}>Articles</Link></li>
                <li><Link to={ROUTES.CONTACTUS}>Contact Us</Link></li>
                <li><Link to={ROUTES.LOGIN}>Log In</Link></li>
            </ul>
        </nav>
    </div>
    </div>
}
export default MainNav