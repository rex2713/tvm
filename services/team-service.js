import axios from "axios";
const Default_URL = import.meta.env.VITE_Default_URL;

class TeamService {
  getAllTeam() {
    return axios.get(Default_URL + "/team");
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
  getUserByName(username) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.get(Dafult_URl + "/team/" + username, {
      headers: {
        Authorization: token,
      },
    });
  }
}

export default new TeamService();
