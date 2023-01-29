import axios from "axios";

export const eventServiceApi = axios.create({
  baseURL: "http://localhost:8000/api/events",
});
