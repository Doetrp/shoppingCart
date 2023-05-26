import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Cookies from "js-cookie";

class User {
  async register(userName, password) {
    const payload = {
      data: {
        username: userName,
        password: password,
        token: uuidv4(),
      },
    };
    const user = await axios
      .post("http://localhost:1337/api/user-id-shopping-carts", payload)
      .then((response) => {});
  }
  async Login(userName, password) {
    const user = await axios
      .get(
        `http://localhost:1337/api/user-id-shopping-carts?filters[username][$eq]=${userName}&filters[password][$eq]=${password}&populate=information.product`
      )
      .then((response) => {
        return response.data.data[0];
      });
    if (user) {
      Cookies.set("currentUser", JSON.stringify(user));
    }
    return user;
  }
  async getproductbyid(id) {
    await axios
      .get(
        `http://localhost:1337/api/user-id-shopping-carts/${id}?populate=information.product `
      )
      .then((response) => {
        Cookies.set("currentUser", JSON.stringify(response.data.data));
      });
  }
  async addProductIncart(id, payload) {
    return await axios
      .put(`http://localhost:1337/api/user-id-shopping-carts/${id}`, payload)
      .then((response) => {
        return response.data.data.id;
      });
  }
  async addOrder(payload) {
    return await axios
      .post(`http://localhost:1337/api/order-lists`, payload)
      .then((response) => {
        console.log(response.data);
        return response.data.data.id;
      });
  }
}

export default new User();
