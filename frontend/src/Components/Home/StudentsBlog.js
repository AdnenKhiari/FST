import "./../../styles/Home/_StudentsBlog.scss"
import {Link} from "react-router-dom"
import * as ROUTES from "./../../Constants/routes"
const StudentsBlog = ()=>{
    const articlesList = [{
        id:"7743",
        title:"JPO Coming Soon",
        date: "18-20-2021",
        description :"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ut animi illo deleniti, neque, ducimus corrupti accusantium ea consectetur iste sapiente tenetur aspernatur laudantium eum provident, nulla similique rerum repudiandae."+
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi suscipit quibusdam nemo reprehenderit aut quas esse libero cum, similique asperiores, sit exercitationem ex laudantium animi recusandae assumenda eligendi unde optio."+
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi suscipit quibusdam nemo reprehenderit aut quas esse libero cum, similique asperiores, sit exercitationem ex laudantium animi recusandae assumenda eligendi unde optio.",
        author : "Adnen Khiari",
        pfp : "https://ui-avatars.com/api/?size=128"
    },{
        id:"7743",
        title:"JPO Coming Soon",
        date: "18-20-2021",
        description :"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ut animi illo deleniti, neque, ducimus corrupti accusantium ea consectetur iste sapiente tenetur aspernatur laudantium eum provident, nulla similique rerum repudiandae."+
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi suscipit quibusdam nemo reprehenderit aut quas esse libero cum, similique asperiores, sit exercitationem ex laudantium animi recusandae assumenda eligendi unde optio."+
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi suscipit quibusdam nemo reprehenderit aut quas esse libero cum, similique asperiores, sit exercitationem ex laudantium animi recusandae assumenda eligendi unde optio.",
        author : "Adnen Khiari",
        pfp : "https://ui-avatars.com/api/?size=128",
        img : "images/show2.jfif"

    },
    {
        id:"7743",
        title:"JPO Coming Soon",
        date: "18-20-2021",
        description :"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ut animi illo deleniti, neque, ducimus corrupti accusantium ea consectetur iste sapiente tenetur aspernatur laudantium eum provident, nulla similique rerum repudiandae."+
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi suscipit quibusdam nemo reprehenderit aut quas esse libero cum, similique asperiores, sit exercitationem ex laudantium animi recusandae assumenda eligendi unde optio."+
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi suscipit quibusdam nemo reprehenderit aut quas esse libero cum, similique asperiores, sit exercitationem ex laudantium animi recusandae assumenda eligendi unde optio.",
        author : "Adnen Khiari",
        pfp : "https://ui-avatars.com/api/?size=128"
    },
    {
        id:"7743",
        title:"JPO Coming Soon",
        date: "18-20-2021",
        description :"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ut animi illo deleniti, neque, ducimus corrupti accusantium ea consectetur iste sapiente tenetur aspernatur laudantium eum provident, nulla similique rerum repudiandae."+
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi suscipit quibusdam nemo reprehenderit aut quas esse libero cum, similique asperiores, sit exercitationem ex laudantium animi recusandae assumenda eligendi unde optio."+
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi suscipit quibusdam nemo reprehenderit aut quas esse libero cum, similique asperiores, sit exercitationem ex laudantium animi recusandae assumenda eligendi unde optio.",
        author : "Adnen Khiari",
        pfp : "https://ui-avatars.com/api/?size=128",
        img : "images/infoplus.jpg"

    },{
        id:"7743",
        title:"JPO Coming Soon",
        date: "18-20-2021",
        description :"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ut animi illo deleniti, neque, ducimus corrupti accusantium ea consectetur iste sapiente tenetur aspernatur laudantium eum provident, nulla similique rerum repudiandae."+
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi suscipit quibusdam nemo reprehenderit aut quas esse libero cum, similique asperiores, sit exercitationem ex laudantium animi recusandae assumenda eligendi unde optio."+
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi suscipit quibusdam nemo reprehenderit aut quas esse libero cum, similique asperiores, sit exercitationem ex laudantium animi recusandae assumenda eligendi unde optio.",
        author : "Adnen Khiari",
        pfp : "https://ui-avatars.com/api/?size=128",
        img : "images/echec.jpg"
    },{
        id:"7743",
        title:"JPO Coming Soon",
        date: "18-20-2021",
        description :"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ut animi illo deleniti, neque, ducimus corrupti accusantium ea consectetur iste sapiente tenetur aspernatur laudantium eum provident, nulla similique rerum repudiandae."+
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi suscipit quibusdam nemo reprehenderit aut quas esse libero cum, similique asperiores, sit exercitationem ex laudantium animi recusandae assumenda eligendi unde optio."+
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi suscipit quibusdam nemo reprehenderit aut quas esse libero cum, similique asperiores, sit exercitationem ex laudantium animi recusandae assumenda eligendi unde optio.",
        author : "Adnen Khiari",
        pfp : "https://ui-avatars.com/api/?size=128" 
    }
    ,
    {
        id:"7743",
        title:"JPO Coming Soon",
        date: "18-20-2021",
        description :"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ut animi illo deleniti, neque, ducimus corrupti accusantium ea consectetur iste sapiente tenetur aspernatur laudantium eum provident, nulla similique rerum repudiandae."+
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi suscipit quibusdam nemo reprehenderit aut quas esse libero cum, similique asperiores, sit exercitationem ex laudantium animi recusandae assumenda eligendi unde optio."+
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi suscipit quibusdam nemo reprehenderit aut quas esse libero cum, similique asperiores, sit exercitationem ex laudantium animi recusandae assumenda eligendi unde optio.",
        author : "Adnen Khiari",
        pfp : "https://ui-avatars.com/api/?size=128"
    },{
        id:"7743",
        title:"JPO Coming Soon",
        date: "18-20-2021",
        description :"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ut animi illo deleniti, neque, ducimus corrupti accusantium ea consectetur iste sapiente tenetur aspernatur laudantium eum provident, nulla similique rerum repudiandae."+
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi suscipit quibusdam nemo reprehenderit aut quas esse libero cum, similique asperiores, sit exercitationem ex laudantium animi recusandae assumenda eligendi unde optio."+
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi suscipit quibusdam nemo reprehenderit aut quas esse libero cum, similique asperiores, sit exercitationem ex laudantium animi recusandae assumenda eligendi unde optio.",
        author : "Adnen Khiari",
        pfp : "https://ui-avatars.com/api/?size=128"
    }]
    return <section className="sd-blog-container">
        <div className="sd-blog-inner-container">
            <h1 className="sd-blog-title">Students Aricles :</h1>
            <div className="sd-blog-articles">
                {articlesList.map((data,index)=><Article key={index} {...data}/>)}
            </div>
        </div>
    </section>
}

const Article = ({title,author,date,description,pfp,img,id})=>{
    
    return  img ?  <>

    <article className="sd-blog-article-img" >
        <img src={img} alt="echec" />
        <div className="sd-blog-article-body">
            {pfp && <img src={pfp} alt="pfp"/>}
            <p>{description.slice(0,200)}..<Link to={ROUTES.ARTICLE(id)}>Read More..</Link></p>
        </div>
    </article> 
    </> : <>
    <article className="sd-blog-article-article" >
    <div className="sd-blog-article-header">
        {pfp && <img src={pfp} alt="pfp"/>}
        <div>
            <p className="sd-blog-article-author">{author}</p>
            <p className="sd-blog-article-date">{date}</p>
        </div>
    </div>
    <div className="sd-blog-article-body">
        <p className="sd-blog-article-title">{title}</p>
        <p>{description.slice(0,350)}</p>
    </div>
        <div className="sd-blog-article-footer">
        <Link to={ROUTES.ARTICLE(id)}>Read More..</Link>
        </div>
    </article> 
    </> 
}

export default StudentsBlog