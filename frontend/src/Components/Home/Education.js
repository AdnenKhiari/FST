import "./../../styles/Home/_Education.scss"
import {Link} from "react-router-dom"
import * as ROUTES from "./../../Constants/routes"
const Education = ()=>{
    return <section className="education-container">
        <div className="education-inner-container">
            <h1>Departments</h1>
            <div className="education-list">
            <article className="education-component">
                    <img src="images/infodept.jpg" alt="mathdept" />
                    <div className="education-component-content">
                        <div>           
                            <h2>Informatique Department</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque delectus repellat deleniti debitis explicabo esse ab ipsa animi. Nisi incidunt quibusdam mollitia aliquam tempora culpa recusandae ducimus dicta quas numquam!</p>
                        </div>
                        <Link to={ROUTES.EDUCATION}>Read More</Link>
                    </div>
                </article>
                <article className="education-component">
                    <img src="images/biologiedept.jpg" alt="mathdept" />
                    <div className="education-component-content">
                        <div>           
                            <h2>Biology Department</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque delectus repellat deleniti debitis explicabo esse ab ipsa animi. Nisi incidunt quibusdam mollitia aliquam tempora culpa recusandae ducimus dicta quas numquam!</p>
                        </div>
                        <Link to={ROUTES.EDUCATION}>Read More</Link>
                    </div>
                </article>
                <article className="education-component">
                    <img src="images/mathdept.png" alt="mathdept" />
                    <div className="education-component-content">
                        <div>           
                            <h2>Mathmathical Department</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque delectus repellat deleniti debitis explicabo esse ab ipsa animi. Nisi incidunt quibusdam mollitia aliquam tempora culpa recusandae ducimus dicta quas numquam!</p>
                        </div>
                        <Link to={ROUTES.EDUCATION}>Read More</Link>
                    </div>
                </article>
                <article className="education-component">
                    <img src="images/chimiedept.jpg" alt="mathdept" />
                    <div className="education-component-content">
                        <div>           
                            <h2>Chimie Department</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque delectus repellat deleniti debitis explicabo esse ab ipsa animi. Nisi incidunt quibusdam mollitia aliquam tempora culpa recusandae ducimus dicta quas numquam!</p>
                        </div>
                        <Link to={ROUTES.EDUCATION}>Read More</Link>
                    </div>
                </article>
                <article className="education-component">
                    <img src="images/physicdept.jpg" alt="mathdept" />
                    <div className="education-component-content">
                        <div>           
                            <h2>Physics Department</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque delectus repellat deleniti debitis explicabo esse ab ipsa animi. Nisi incidunt quibusdam mollitia aliquam tempora culpa recusandae ducimus dicta quas numquam!</p>
                        </div>
                        <Link to={ROUTES.EDUCATION}>Read More</Link>
                    </div>
                </article>
                <article className="education-component">
                    <img src="images/geologiedept.jpg" alt="mathdept" />
                    <div className="education-component-content">
                        <div>           
                            <h2>Geologie Department</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque delectus repellat deleniti debitis explicabo esse ab ipsa animi. Nisi incidunt quibusdam mollitia aliquam tempora culpa recusandae ducimus dicta quas numquam!</p>
                        </div>
                        <Link to={ROUTES.EDUCATION}>Read More</Link>
                    </div>
                </article>

            </div>
        </div>
    </section>
}

export default Education