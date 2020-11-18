import API from "./api";
export default class LoginHelper {
  getToken() {
    return localStorage.getItem("token");
  }
  setToken(token) {
    localStorage.setItem("token", token);
  }

  isLoggedIn() {
    return !!this.getToken();
  }
  login(email, password) {
    let api = new API();
    return new Promise((res, rej) => {
      api
        .login(email, password)
        .then(res => {
          if (res.status != 200) rej(res);
          return res.json();
        })
        .then(json => {
          this.setToken(json.token);
          res();
        });
    });
  }

  logout() {
    this.setToken("");
  }
}
