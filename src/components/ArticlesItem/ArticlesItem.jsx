const ArticlesItem = ({ item }) => {
  return (
    <li>
      <img src={item.photo.urls.small} />
    </li>
  );
};

export default ArticlesItem;
