const API_URL = "http://navedex-api.herokuapp.com/v1";
import LoginHelper from "./login";
//
export default class API {
  USERS_LOGIN = "/users/login";
  USERS_SIGNUP = "/users/signup";

  NAVERS_INDEX = "/navers";
  NAVERS_CREATE = "/navers";

  NAVERS_SHOW = "/navers/"; //+id GET
  NAVERS_UPDATE = "/navers/"; //+id PUT
  NAVERS_DELETE = "/navers/"; //+id DEL

  fetchAuth(route, args) {
    let loginHelp = new LoginHelper();
    console.log(args);
    args = Object.assign({}, args, {
      headers: {
        Authorization: `Bearer ${loginHelp.getToken()}`,
        "Content-Type": "application/json"
      }
    });
    console.log(args);
    return fetch(route, args).catch(err => {
      if (err.status == 401) loginHelp.logout();
      return err;
    });
  }

  listAll() {
    return this.fetchAuth(API_URL + this.NAVERS_INDEX);
  }

  get(id) {
    return this.fetchAuth(API_URL + this.NAVERS_SHOW + id);
  }
  create(naver) {
    return this.fetchAuth(API_URL + this.NAVERS_CREATE, {
      method: "POST",
      body: JSON.stringify(naver)
    });
  }
  delete(id) {
    return this.fetchAuth(API_URL + this.NAVERS_DELETE + id, {
      method: "DELETE"
    });
  }
  update(naver) {
    return this.fetchAuth(API_URL + this.NAVERS_UPDATE + naver.id, {
      method: "PUT",
      body: JSON.stringify(naver)
    });
  }
  login(email, password) {
    return fetch(API_URL + this.USERS_LOGIN, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });
  }
}
