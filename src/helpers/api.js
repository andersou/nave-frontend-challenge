const API_URL = "http://navedex-api.herokuapp.com/v1";
import LoginHelper from "./login";
let loginHelp = new LoginHelper();
export default class API {
  USERS_LOGIN = "/users/login";
  USERS_SIGNUP = "/users/signup";

  NAVERS_INDEX = "/navers";
  NAVERS_CREATE = "/navers";

  NAVERS_SHOW = "/navers/"; //+id GET
  NAVERS_UPDATE = "/navers/"; //+id PUT
  NAVERS_DELETE = "/navers/"; //+id DEL

  fetchAuth(route, args) {
    args = Object.join({}, args, {
      headers: {
        Authorization: `Bearer ${loginHelp.getToken()}`
      }
    });
    return fetch(route, args).catch(err => {
      if (err.status == 401) loginHelp.logout();
      return err;
    });
  }

  listAll() {
    return this.fetchAuth(NAVERS_INDEX);
  }

  get(id) {
    return this.fetchAuth(NAVERS_SHOW + id);
  }
  create(naver) {
    return this.fetchAuth(NAVERS_CREATE, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(naver)
    });
  }
  delete(id) {
    return this.fetchAuth(NAVERS_DELETE + id, {
      method: "DELETE"
    });
  }
  update(naver) {
    return this.fetchAuth(NAVERS_UPDATE + naver.id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(naver)
    });
  }
}
