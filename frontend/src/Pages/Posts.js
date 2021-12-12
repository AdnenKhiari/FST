import "../styles/Posts.scss"
import {getPosts} from "./../Lib/fetcher/posts"
import Blog from "./../Components/Blog"

const Posts = ()=>{
    const {data,isLoading,isError} = getPosts();
  /*  const posts = [{
        title:"Univeristy of tunis el manar third in the arabic world",
        author :"dbzadnen",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium magni voluptatibus sint at saepe hic doloribus atque nulla impedit ex, sit, eum modi placeat nesciunt delectus ad rem! Dicta, maiores!",
        img : "https://picsum.photos/659",
        pfp : "https://picsum.photos/510",
        date :"01/10/2021"
    },{
        title:"Univeristy of tunis el manar third in the arabic world",
        author :"dbzadnen",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium magni voluptatibus sint at saepe hic doloribus atque nulla impedit ex, sit, eum modi placeat nesciunt delectus ad rem! Dicta, maiores!",
        img : "https://picsum.photos/230",
        pfp : "https://picsum.photos/120",
        date :"25/05/2021"
    }]*/
    if(data && !isError && !isLoading)
    return <Blog posts={data} />
    else
    return <h1>lel</h1>
}

export default Posts