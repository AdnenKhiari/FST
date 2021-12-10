import Blog from "./../Components/Blog"
const News = ()=>{
    const posts = [{
        title:"Univeristy of tunis el manar third in the arabic world",
        author :"dbzadnen",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium magni voluptatibus sint at saepe hic doloribus atque nulla impedit ex, sit, eum modi placeat nesciunt delectus ad rem! Dicta, maiores!",
        img : "https://picsum.photos/659",
        pfp : "https://picsum.photos/500",
        date :"01/10/2021"
    },{
        title:"Univeristy of tunis el manar third in the arabic world",
        author :"dbzadnen",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium magni voluptatibus sint at saepe hic doloribus atque nulla impedit ex, sit, eum modi placeat nesciunt delectus ad rem! Dicta, maiores!",
        img : "https://picsum.photos/700",
        pfp : "https://picsum.photos/400",
        date :"25/05/2021"
    }]
    return <Blog posts={posts} displayAuthor={false}/>
}

export default News;