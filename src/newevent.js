// Initialize an array to store event objects
let events = [];

// Define a function to open multiple popup windows for input
function createNewEvent() {
  const eventName = window.prompt("Inserisci l'even:", "Allenamento");
  if (eventName) {
    const eventDate = window.prompt("Inserisci la data dell'evento:", "01/01/2022");
    const eventTime = window.prompt("Inserisci l'ora dell'evento:", "12:00");
    const eventPlace = window.prompt("Inserisci il luogo dell'evento", "Palestra");

    // Store event details in an object
    const event = {
      name: eventName,
      date: eventDate,
      time: eventTime,
      place: eventPlace
    };

    // Add the event object to the events array
    events.push(event);

    // Update the display
    displayEvents();
  } else {
    console.log("Event creation was cancelled.");
  }
}

// Function to display events
function displayEvents() {
  // Find or create a container for events in the document
  let eventsContainer = document.getElementById("eventsContainer");
  if (!eventsContainer) {
    eventsContainer = document.createElement("div");
    eventsContainer.id = "eventsContainer";
    document.body.appendChild(eventsContainer);
  }

  // Clear the container before adding updated events list
  eventsContainer.innerHTML = "";

// Sort events by date
events.sort((a, b) => new Date(a.date) - new Date(b.date));

// Create and append HTML elements for each event
events.forEach((event, index) => {

  const eventElement = document.createElement("div");
  eventElement.classList.add("event");
  eventElement.innerHTML = `Impegno: ${event.name}, Orario: ${event.time}, Giorno: ${event.date}, Luogo: ${event.place}`;
  eventsContainer.appendChild(eventElement);
  
  // Create the "Eseguito" button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Eseguito";
  deleteButton.style.marginLeft = "10px"; // Add some space between the event text and the button
  
  // Add click event listener to the button for deleting the event
  deleteButton.addEventListener('click', function() {
    // Remove the event from the store
    events = events.filter(e => e.name !== event.name || e.date !== event.date || e.time !== event.time);
    // Remove the event element from the display
    eventElement.remove();
  });
  
  // Append the delete button to the event element
  eventElement.appendChild(deleteButton);
});
  
}


// Export the function
export { createNewEvent };