import { displayAgendaForSelectedUser } from "./displayAgenda.js";
import { calculateDates } from "./calculateDate.js";
// import { users_data } from "./data.js";
import { addData, getData } from "./storage.js";

const form = document.getElementById("form-add-topic"); // Changed to get element by id.

export function addNewTopic() {
  const selectElement = document.getElementById("select-users"); // Get a select tag.
  const selectedUserId = selectElement ? selectElement.value.trim() : ''; // Get user's id (value)
  // const selectedUserName = document.getElementById("select-users").value.trim(); 
 
  const topicName = document.getElementById("form-topic").value.trim(); // trim spaces
  const startDate = document.getElementById("form-date").value;

  
  if (!selectedUserId || !topicName || !startDate) { // Changed selectedUserName --> selectedUserId
    alert("Please fill in all fields.");
    return;
  }

  const newTopic = {
    title: topicName,
    dates: calculateDates(startDate),
  };

  // const user = users_data.find((user) => user.name === selectedUserName) || [];
  // user.agenda.push(newTopic);
  // addData(user.id, user);  

  // Get stored data for selected user
  let userAgenda = getData(selectedUserId) || [];

  // Make sure to don't add duplicate of topics in agenda.
  // Check if the topic already exists in the agenda. Compare title and dates.
  const topicExists = userAgenda.some(
    (agenda) => agenda.title === newTopic.title && JSON.stringify(agenda.dates) === JSON.stringify(newTopic.dates)
  );
  // If there is a topic in agenda, don't add the same topic twice.
  if (topicExists) {
    alert("This topic already exists in the agenda.");
    return;
  }

  // Add the new topic
  userAgenda.push(newTopic);

  // Store new agenda (all agenda)
  addData(selectedUserId, userAgenda);  

  displayAgendaForSelectedUser();
  form.reset();
}
