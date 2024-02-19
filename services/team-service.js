import axios from "axios";
const Default_URL = import.meta.env.VITE_Default_URL;

class TeamService {
  getAllTeam() {
    return axios.get(Default_URL + "/team");
  }
  teamCreate(formData) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.post(Default_URL + "/team/auth/teamCreate", formData, {
      headers: {
        Authorization: token,
      },
    });
  }
  teamJoin(teamId, userId) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.patch(
      Default_URL + "/team/auth/teamJoin/" + teamId + "/" + userId,
      {},
      {
        headers: {
          Authorization: token,
        },
      },
    );
  }
  getUserByEmail(email) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.get(Default_URL + "/team/" + email, {
      headers: {
        Authorization: token,
      },
    });
  }
  getRadomTenUsers() {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.get(Default_URL + "/team/auth/radomTen", {
      headers: {
        Authorization: token,
      },
    });
  }
}

export default new TeamService();
