import axios from "axios";
const AUTH_URL = "http://localhost:8080/tvm/user";
const Render_URL = "https://tvm-api.onrender.com/tvm/user";

class AuthService {
  register(formData) {
    return axios.post(Render_URL + "/register", formData);
  }
  login(email, password) {
    return axios.post(Render_URL + "/login", {
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
    return axios.patch(Render_URL + "/update/" + _id, formData, {
      headers: {
        Authorization: token,
      },
    });
  }
}

export default new AuthService();
