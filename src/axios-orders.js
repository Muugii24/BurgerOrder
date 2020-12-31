import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-f17e7-default-rtdb.firebaseio.com/",
});

export default instance;
