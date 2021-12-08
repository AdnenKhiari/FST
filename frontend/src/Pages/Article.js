import "./../styles/Article.scss";
const Article = () => {
  const data = {
    author: "dbzadnen",
    date: "2021-15-06",
    title: "University of tunis el manar for the best",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, ducimus minus quos magnam similique rem vel cum accusantium quibusdam, atque repellendus. Quidem labore esse earum, reprehenderit velit adipisci tenetur id." +
      "Autem unde enim omnis soluta? Quisquam voluptates, inventore eligendi eveniet temporibus nihil eius. Consectetur debitis ab voluptatibus quisquam neque quis quasi vel nam! Voluptate ut aspernatur exercitationem et, repellat maiores!" +
      "Et assumenda unde excepturi numquam harum esse repellat placeat, consequatur, optio dolores quae cupiditate quis, corporis veritatis ab vitae. Dolores quasi ipsa autem est molestiae perspiciatis consequuntur eligendi repellendus! Minus." +
      "Illo distinctio consequatur doloribus deserunt officiis non consequuntur dolorum natus ullam amet nostrum animi, quae officia nam voluptatum earum et eos totam quasi fuga! Perspiciatis quam architecto consequuntur sed adipisci!",
    pfp: "/images/cs-chapter.jpg",
    img: "/images/jpo.jpg",
  };
  return (
    <section className="article-container">
      <article className="article-inner-container">
        <div className="article-header">
          <div className="article-header-meta">
            <img src={data.pfp} alt="" />
            <div>
              <p>
                {data.author} <small>{data.date}</small>
              </p>
            </div>
          </div>
          <img className="article-header-img" src={data.img} alt="" />
          <hr />
          <h1>{data.title}</h1>
        </div>
        <div className="article-body">
          <p>{data.content}</p>
          <p>{data.content}</p>
          <p>{data.content}</p>
          <p>{data.content}</p>
          <p>{data.content}</p>
          <p>{data.content}</p>
          <p>{data.content}</p>
        </div>
        <div className="article-footer"></div>
      </article>
    </section>
  );
};
export default Article;
