import axios from "axios";

export const football = axios.create({
  baseURL: "http://api.football-data.org/v2",
  headers: { "X-Auth-Token": " 1d52cf594f5141ba93285472e0d58b54" },
});
