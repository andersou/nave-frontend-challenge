
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
    return new Promise((res, rej) => {
      fetch(API_URL + "/users/login", {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      })
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
