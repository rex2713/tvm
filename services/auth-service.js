import axios from "axios";
const Default_URL = import.meta.env.VITE_Default_URL;

class AuthService {
  copyRenderDisk() {
    return axios.get(Default_URL + "/user/");
  }
  register(formData) {
    return axios.post(Default_URL + "/user/register", formData);
  }
  login(email, password) {
    return axios.post(Default_URL + "/user/login", {
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
    return axios.patch(Default_URL + "/user/update/" + _id, formData, {
      headers: {
        Authorization: token,
      },
    });
  }
  getUserById(_id) {
    return axios.get(Default_URL + "/user/" + _id);
  }
}

export default new AuthService();
