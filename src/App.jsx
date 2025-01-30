import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchRequest } from "./services/api";
import ArticleList from "./components/ArticleList/ArticleList";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!query) return;
    async function fetchArticles() {
      try {
        const { hits } = await fetchRequest(query);
        setArticles((prev) => [...prev, ...hits]);
      } catch {
      } finally {
      }
    }
    fetchArticles();
  }, [query]);
  const handleSetQuery = (newQuery) => {
    setQuery(newQuery);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSetQuery} />
      {articles.length > 0 && <ArticleList articles={articles} />}
    </div>
  );
}
