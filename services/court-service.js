import axios from "axios";
const API_URL = "http://localhost:8080/tvm/court";
const addCourt_URL = "http://localhost:8080/tvm/admin/addcourt";
const deleteCourt_URL = "http://localhost:8080/tvm/admin/";
const uploadImg_URL = "http://localhost:8080/tvm/admin/upload";

class CourtService {
  //搜尋所有場地
  getAllCourts() {
    return axios.get(API_URL);
  }
  //新增球場
  postAddCourt(
    courtName,
    openingHours,
    courtType,
    courtAddress,
    isPark,
    isBus,
    isMRT,
    price,
  ) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.post(
      addCourt_URL,
      {
        courtName,
        openingHours,
        courtType,
        courtAddress,
        isPark,
        isBus,
        isMRT,
        price,
      },
      {
        headers: {
          Authorization: token,
        },
      },
    );
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
    return axios.delete(deleteCourt_URL + _id, {
      headers: {
        Authorization: token,
      },
    });
  }
  //上傳球場圖片
  uploadImg(formdata) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
      // console.log(token);
    } else {
      token = "";
    }

    return axios.post(uploadImg_URL, formdata, {
      headers: {
        Authorization: token,
      },
    });
    // .then((res) => console.log(res))
    // .catch((e) => console.log(e));
  }
}

export default new CourtService();
