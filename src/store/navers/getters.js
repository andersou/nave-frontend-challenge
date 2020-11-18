export function getNaver(state, id) {
  return state.navers.find(naver => naver.id == id);
}
