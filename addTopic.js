import { displayAgendaForSelectedUser } from "./displayAgenda.js";
import { calculateDates } from "./calculateDate.js"; 
import { users_data } from "./data.js";


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
  console.log(newTopic);
    
  const user = users_data.find((user) => user.name === selectedUserName);
  user.agenda.push(newTopic);

  displayAgendaForSelectedUser();
  form.reset();
}
