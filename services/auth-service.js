import axios from "axios";
const AUTH_URL = "http://localhost:8080/tvm/user";

class AuthService {
  register(formData) {
    return axios.post(AUTH_URL + "/register", formData);
  }
  login(email, password) {
    return axios.post(AUTH_URL + "/login", {
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
    return axios.patch(AUTH_URL + "/update/" + _id, formData, {
      headers: {
        Authorization: token,
      },
    });
  }
}

export default new AuthService();
