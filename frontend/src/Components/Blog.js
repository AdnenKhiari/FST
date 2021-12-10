import * as ROUTES from "./../Constants/routes" 
import { Link } from "react-router-dom"
import "../styles/Posts.scss"
const Blog = ({posts,displayAuthor = true})=>{
    return <div className="posts-container">
    <div className="posts-header">
    <div className="posts-search">
        <p>Searching something ?</p>
        <div className="posts-search-filter">
            <div className="posts-search-filter-field">
                <label htmlFor="postname">Post Name</label>
                <input type="search" name="postname" id="postname" />
            </div>
            {displayAuthor && <div className="posts-search-filter-field">
                <label htmlFor="author">Author</label>
                <input type="search" name="author" id="author" />
            </div>}
            <div className="posts-search-filter-field posts-search-filter-field-date">
                <label htmlFor="datestart">Date</label>
                <div>
                    <input type="date" name="datestart" id="datestart" />
                    <input type="date" name="dateend" id="dateend" />
                </div>
            </div>
            <div className="posts-search-filter-field">
                <button><i class="fas fa-search"></i>   Search</button>
            </div>
        </div>
    </div>
    </div>

    <div className="posts-inner-container">
        <section className="posts-articles">
            {posts && posts.map((data,index)=><Article {...data} key={index} />)}
            {posts && posts.map((data,index)=><Article {...data} key={index} />)}
            {posts && posts.map((data,index)=><Article {...data} key={index} />)}
        </section>
    </div>
    </div>

}

const Article = ({title,img,date,description,author,pfp})=>{
    return <article className="posts-article">
        <div>
            <img className="posts-article-pfp" src={pfp} alt="" />
        </div>
        <img className="posts-article-img" src={img} alt="" />
        <div className="posts-article-content">
            <p className="posts-article-author">{author}</p>
            <p className="posts-article-date">{date}</p>
        </div>
        <p className="posts-article-title">{title}</p>
        <p className="posts-article-description">{description} <br /><Link to={ROUTES.ARTICLE}>Read More...</Link></p>

    </article>
}

export default Blog