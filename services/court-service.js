import axios from "axios";

const Default_URL = import.meta.env.VITE_Default_URL;

class CourtService {
  //搜尋所有場地
  getAllCourts() {
    return axios.get(Default_URL + "/court");
  }
  //新增球場
  postAddCourt(formData) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.post(Default_URL + "/admin/addcourt", formData, {
      headers: {
        Authorization: token,
      },
    });
  }
  //更改球場資料
  updateCourt(_id, formData) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.patch(Default_URL + "/admin/updateCourt/" + _id, formData, {
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
    return axios.delete(Default_URL + "/admin/" + _id, {
      headers: {
        Authorization: token,
      },
    });
  }
}

export default new CourtService();
