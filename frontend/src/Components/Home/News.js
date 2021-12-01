import {Link} from "react-router-dom"
import "./../../styles/Home/_News.scss"
const News = ()=>{
    const newslist = [{
        title:"JPO Coming Soon",
        date: "18-20-2021",
        description :"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ut animi illo deleniti, neque, ducimus corrupti accusantium ea consectetur iste sapiente tenetur aspernatur laudantium eum provident, nulla similique rerum repudiandae."+
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi suscipit quibusdam nemo reprehenderit aut quas esse libero cum, similique asperiores, sit exercitationem ex laudantium animi recusandae assumenda eligendi unde optio."+
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi suscipit quibusdam nemo reprehenderit aut quas esse libero cum, similique asperiores, sit exercitationem ex laudantium animi recusandae assumenda eligendi unde optio.",
        featured : true,
        img : "images/jpo.jpg"
    },
    {
        title:"JPO Coming Soon",
        date: "18-20-2021",
        description :"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ut animi illo deleniti, neque, ducimus corrupti accusantium ea consectetur iste sapiente tenetur aspernatur laudantium eum provident, nulla similique rerum repudiandae.",
        featured : false
    },
    {
        title:"JPO Coming Soon",
        date: "18-20-2021",
        description :"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ut animi illo deleniti, neque, ducimus corrupti accusantium ea consectetur iste sapiente tenetur aspernatur laudantium eum provident, nulla similique rerum repudiandae.",
        featured : false
    },
    {
        title:"JPO Coming Soon",
        date: "18-20-2021",
        description :"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ut animi illo deleniti, neque, ducimus corrupti accusantium ea consectetur iste sapiente tenetur aspernatur laudantium eum provident, nulla similique rerum repudiandae.",
        featured : false
    },
    {
        title:"JPO Coming Soon",
        date: "18-20-2021",
        description :"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ut animi illo deleniti, neque, ducimus corrupti accusantium ea consectetur iste sapiente tenetur aspernatur laudantium eum provident, nulla similique rerum repudiandae.",
        featured : false
    }]

    return <section className="news-container">
        <div className="news-inner-container">

        <h1 className="title">Latest News :</h1>
        <div className="news-article-container">
            <div>
            {newslist.map((data,index)=> !data.featured && <NewArticle  key={index}  {...data}/> )}
            </div>
            <div>
            {newslist.map((data,index)=> data.featured && <NewArticle  key={index}  {...data}/> )}
            </div>
        </div>
        </div>

    </section>
}

const NewArticle = ({title,date,description,img,featured})=>{
    return <article className={"news-article" + (featured? " featured" : "")}>
        {featured &&  <img src={img} alt="featuredImage" />}
        <div className="news-article-header">
            <p className="news-title">{title}<hr/></p>
            <p className="news-date">{date}</p>
        </div>
        <div className="news-article-body">
            <p>{description} <Link to="menu" >Read More...</Link></p>
        </div>
        <div className="news-article-footer">
            
        </div>
    </article>
}
export default News;
