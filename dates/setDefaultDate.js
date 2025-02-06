export function setDefaultDate() {
  const inputDate = document.querySelector("#form-date");

  const todayDate = new Date();
  let year = todayDate.getFullYear();
  let month = todayDate.getMonth() + 1;
  let day = todayDate.getDate();

  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;

  inputDate.value = `${year}-${month}-${day}`;
}
