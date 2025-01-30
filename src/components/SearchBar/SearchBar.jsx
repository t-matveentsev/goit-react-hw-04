import { useState } from "react";
import toast from "react-hot-toast";
import s from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    value.length > 0
      ? onSubmit(value)
      : toast.error("Entered nothing. Received nothing.");
  };

  return (
    <section className={s.wrapper}>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type="text"
          autoComplete="off"
          placeholder="Search images"
        />
        <button className={s.formBtn}>Search</button>
      </form>
    </section>
  );
};

export default SearchBar;
