import moment from "moment";
function formDateComputed(variableName) {
  return {
    set(date) {
      this.naver[variableName] = moment(date, "YYYY-MM-DD").format(
        "DD/MM/YYYY"
      );
    },
    get() {
      //data vai para o servidor no format dd/mm/yyyy mas vem em formato iso
      let regex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
      if (regex.test(this.naver[variableName])) {
        return moment(this.naver[variableName], "DD/MM/YYYY").format(
          "YYYY-MM-DD"
        );
      } else {
        return moment(this.naver[variableName]).format("YYYY-MM-DD");
      }
    }
  };
}
export { formDateComputed };
