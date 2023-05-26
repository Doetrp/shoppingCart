import Cookies from "js-cookie";

class ProTectPath {
  async getCurrentUser() {
    return await Cookies.get("currentUser");
  }
  async LogOut() {
    await Cookies.remove("currentUser");
  }
  async CheckLogin() {
    const isLogin = await Cookies.get("currentUser");
    if (isLogin) {
      return true;
    } else {
      return false;
    }
  }
}

export default new ProTectPath();
