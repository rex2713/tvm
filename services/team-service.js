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
  getUserTeams(_id) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.get(Default_URL + "/team/auth/ownTeam/" + _id, {
      headers: {
        Authorization: token,
      },
    });
  }
  teamLeave(user_id, team_id) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.patch(
      Default_URL + "/team/auth/teamLeave/" + user_id + "/" + team_id,
      {},
      {
        headers: {
          Authorization: token,
        },
      },
    );
  }
  teamAdd(user_id, team_id) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.patch(
      Default_URL + "/team/auth/teamAdd/" + user_id + "/" + team_id,
      {},
      {
        headers: {
          Authorization: token,
        },
      },
    );
  }
  teamGetInfo(_id) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.get(Default_URL + "/team/auth/teamInfo/" + _id, {
      headers: {
        Authorization: token,
      },
    });
  }
  teamDelete(user_ids, team_id, court_id) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.delete(
      Default_URL +
        "/team/auth/teamDelete/" +
        user_ids +
        "/" +
        team_id +
        "/" +
        court_id,
      {
        headers: {
          Authorization: token,
        },
      },
    );
  }
}

export default new TeamService();
