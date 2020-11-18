import API from "../../helpers/api";
let api = new API();
export function listarNavers(context) {
  return api
    .listAll()
    .then(r => r.json())
    .then(json => {
      context.commit("updateNavers", json);
    });
}
export function deletarNaver(context, id) {
  api.delete(id).then(resp => {
    api
      .listAll()
      .then(r => r.json())
      .then(json => {
        context.commit("updateNavers", json);
      });
    return resp;
  });
}
export function atualizarNaver(context, naver) {
  return api.update(naver).then(resp => {
    api
      .listAll()
      .then(r => r.json())
      .then(json => {
        context.commit("updateNavers", json);
      });
    console.log("aaa", resp);
    return resp;
  });
}
export function criarNaver(context, naver) {
  return api.create(naver).then(resp => {
    api
      .listAll()
      .then(r => (response = r.json()))
      .then(json => {
        context.commit("updateNavers", json);
      });
    return resp;
  });
}
