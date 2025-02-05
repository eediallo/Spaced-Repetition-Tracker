import { displayAgendaForSelectedUser } from "./displayAgenda.js";
import { calculateDates } from "./calculateDate.js";
import { users_data } from "./data.js";
import { addData, getData } from "./storage.js";
const form = document.querySelector("form");

export function addNewTopic() {
  const selectedUserName = document.getElementById("select-users").value;
  const topicName = document.getElementById("form-topic").value;
  const startDate = document.getElementById("form-date").value;

  if (!selectedUserName || !topicName || !startDate) {
    alert("Please fill in all fields.");
    return;
  }

  const newTopic = {
    title: topicName,
    dates: calculateDates(startDate),
  };

  const user = users_data.find((user) => user.name === selectedUserName) || [];
  user.agenda.push(newTopic);
  addData(user.id, user);

  //add user data to local storage

  ///displayAgendaForSelectedUser();
  form.reset();
}
