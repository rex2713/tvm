import axios from "axios";
const Local_URL = "http://localhost:8080/tvm/user";
const Render_URL = "https://tvm-api.onrender.com/tvm/user";

class AuthService {
  copyRenderDisk() {
    return axios.get(Local_URL + "/");
  }
  register(formData) {
    return axios.post(Local_URL + "/register", formData);
  }
  login(email, password) {
    return axios.post(Local_URL + "/login", {
      email,
      password,
    });
  }
  logout() {
    return localStorage.removeItem("user");
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
  updateUser(formData, _id) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.patch(Local_URL + "/update/" + _id, formData, {
      headers: {
        Authorization: token,
      },
    });
  }
}

export default new AuthService();
