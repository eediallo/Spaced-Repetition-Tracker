import { inputDate } from "../queries.js";
export function setDefaultDate() {
  const todayDate = new Date();
  let year = todayDate.getFullYear();
  let month = todayDate.getMonth() + 1;
  let day = todayDate.getDate();

  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;

  inputDate.value = `${year}-${month}-${day}`;
}
