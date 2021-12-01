import {Link } from "react-router-dom"
import "./../styles/MainNav.scss"
const MainNav = ()=>{
    return <div className="main-nav-container">
     <div className="main-nav-inner-container">
        <img src="images/fstlogo.png" alt="fstlogo" />
        <nav>
            <ul>
                <li><Link to="">Home</Link></li>
                <li><Link to="">Admission</Link></li>
                <li><Link to="">Specialites</Link></li>
                <li><Link to="">News</Link></li>
                <li><Link to="">Articles</Link></li>
                <li><Link to="">Contact Us</Link></li>
            </ul>
        </nav>
    </div>
    </div>
}
export default MainNav