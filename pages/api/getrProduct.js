import axios from "axios";

class Product {
  async ProductList(productId) {
    const id = productId ? `&filters[id][$eq]=${productId}` : "";
    const data = await axios
      .get(`http://localhost:1337/api/product-lists?populate=*${id}`)
      .then((response) => {
        return response.data;
      });
    return data;
  }
  async ProductListCart(productId) {
    let payload = "";
    productId.map((e) =>
      e.productId ? (payload += `&filters[id][$eq]=${e.productId}`) : ""
    );
    console.log("payload", payload);
    const data = await axios
      .get(`http://localhost:1337/api/product-lists?populate=*${payload}`)
      .then((response) => {
        return response.data;
      });
    return data;
  }
}
export default new Product();
