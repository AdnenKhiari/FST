import {Link} from "react-router-dom"
import "./../styles/Footer.scss"
const Footer = ()=>{
    return <footer className="footer-container">
        <div className="footer-inner-container">
            <i className="fas fa-sort-down splitter"></i>
            <div className="footer-content">
                <nav className = "footer-nav">
                    <ul className= "footer-nav-block">
                        <li>
                            <Link to="">Home</Link>
                        </li>
                        <li>
                            <Link to="">Contact</Link>
                        </li>
                        <li>
                            <Link to="">News</Link>
                        </li>
                        <li>
                            <Link to="">Article</Link>
                        </li>
                        <li>
                            <Link to="">LogIn</Link>
                        </li>
                        <li>
                            <Link to="">Sign Up</Link>
                        </li>
                    </ul>
                    <ul className= "footer-nav-block">
                        <li>
                            <Link to="">Home</Link>
                        </li>
                        <li>
                            <Link to="">Contact</Link>
                        </li>
                        <li>
                            <Link to="">News</Link>
                        </li>
                        <li>
                            <Link to="">Article</Link>
                        </li>
                        <li>
                            <Link to="">LogIn</Link>
                        </li>
                        <li>
                            <Link to="">Sign Up</Link>
                        </li>
                    </ul>
                    <ul className= "footer-nav-block">
                        <li>
                            <Link to="">Home</Link>
                        </li>
                        <li>
                            <Link to="">Contact</Link>
                        </li>
                        <li>
                            <Link to="">News</Link>
                        </li>
                        <li>
                            <Link to="">Article</Link>
                        </li>
                        <li>
                            <Link to="">LogIn</Link>
                        </li>
                        <li>
                            <Link to="">Sign Up</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="footer-map">
                <div>
                    <p className="field">Adress :</p>
                    <p>20 Rue de Tolède, Tunis 2092</p>
                    <p className="field">Tel : <span>71 872 600</span></p>   
                    <p className="field">Fax : <span>71 871 666</span> </p>
                    <p className="field">Email :</p> 
                    <p><a href="mailto:mongi.brichni@fst.rnu.tn">mongi.brichni@fst.rnu.tn</a></p>

                </div>
                <iframe title="fstmap "id="gmap_canvas" src="https://maps.google.com/maps?q=fst%20tunisie&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" />
            </div>
        </div>
    </footer>
}
export default Footer