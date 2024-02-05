import axios from "axios";
const API_URL = "http://localhost:8080/tvm/court";

class CourtService {
  //搜尋所有場地
  getAllCourts() {
    return axios.get(API_URL);
  }
}

export default new CourtService();
