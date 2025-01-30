import axios from "axios";

const API_KEY = "b_CJbKH7Aq5qShy9YPJqzzmudGtPruzafs9oRbUE0VU";

export const fetchRequest = async (query) => {
  const response = await axios.get(
    `https://api.unsplash.com/photos/?client_id=${API_KEY}&query=${query}`
  );
  console.log(response);
  return response;
};
