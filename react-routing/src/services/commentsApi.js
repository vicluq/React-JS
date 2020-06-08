import axios from "axios";

export const commentsReq = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
});
