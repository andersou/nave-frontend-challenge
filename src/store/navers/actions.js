import API from "../../helpers/api";
let api = new API();
export function listarNavers(context) {
  api
    .listAll()
    .then(r => r.json())
    .then(json => {
      context.commit("updateNavers", json);
    });
}
export function deletarNaver(context, id) {
  api.delete(id).then(() => {
    return api
      .listAll()
      .then(r => r.json())
      .then(json => {
        context.commit("updateNavers", json);
      });
  });
}
export function atualizarNaver(context, naver) {
  api.update(naver).then(() => {
    return api
      .listAll()
      .then(r => r.json())
      .then(json => {
        context.commit("updateNavers", json);
      });
  });
}
export function criarNaver(context, naver) {
  api.create(naver).then(() => {
    return api
      .listAll()
      .then(r => r.json())
      .then(json => {
        context.commit("updateNavers", json);
      });
  });
}
