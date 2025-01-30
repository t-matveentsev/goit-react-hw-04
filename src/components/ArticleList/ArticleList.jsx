import ArticlesItem from "../ArticlesItem/ArticlesItem";

const ArticleList = ({ articles }) => {
  return (
    <ul>
      {articles.map((item) => (
        <ArticlesItem key={articles.id} item={item} />
      ))}
    </ul>
  );
};

export default ArticleList;
