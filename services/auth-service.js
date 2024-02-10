import axios from "axios";
const AUTH_URL = "http://localhost:8080/tvm/user";

class AuthService {
  register(username, email, password) {
    return axios.post(AUTH_URL + "/register", {
      username,
      email,
      password,
    });
  }
  login(email, password) {
    return axios.post(AUTH_URL + "/login", {
      email,
      password,
    });
  }
  logout() {
    localStorage.removeItem("user");
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
