import axios from "axios";

const storeOrder = axios.create({
  baseURL: "https://burger-builder-bed15.firebaseio.com/",
});

export default storeOrder;
