import axios from "axios";
const API_URL = "http://localhost:8080/tvm/court";
const addCourt_URL = "http://localhost:8080/tvm/admin/addcourt";
const deleteCourt_URL = "http://localhost:8080/tvm/admin/";
const Render_URL = "https://tvm-api.onrender.com/tvm";

class CourtService {
  //搜尋所有場地
  getAllCourts() {
    return axios.get(Render_URL + "/court/");
  }
  //新增球場
  postAddCourt(formData) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.post(Render_URL + "/admin/addcourt", formData, {
      headers: {
        Authorization: token,
      },
    });
  }
  //刪除球場
  deleteCourt(_id) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
      // console.log(token);
    } else {
      token = "";
    }
    return axios.delete(Render_URL + "/admin/" + _id, {
      headers: {
        Authorization: token,
      },
    });
  }
}

export default new CourtService();
