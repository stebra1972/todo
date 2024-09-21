// Initialize an array to store event objects
let events = [];



// Function to display dates in the top row
function displayDatesInTopRow() {
    // Assuming `events` is your array of event objects
    const datesHtml = events.map(event => {
      // Convert event.date to a Date object if it's not already one
      const eventDate = new Date(event.date);
      const formattedDate = eventDate.toLocaleDateString('it-IT', {
        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
      });
      return `<span>${formattedDate}</span>`; // Create a span for each date
    }).join(' '); // Join all spans with a space
  
    // Assuming you have a div with id="topRow" in your HTML
    document.getElementById('topRow').innerHTML = datesHtml;
  }



function createNewEvent() {
    const eventName = window.prompt("Inserisci l'evento:", "Allenamento");
    // Format today's date in Italian format
    const today = new Date();
    const formattedToday = today.toLocaleDateString('it-IT', {
      weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
    });
    const eventDate = window.prompt("Inserisci la data dell'evento:", formattedToday);
    const eventTime = window.prompt("Inserisci l'ora dell'evento:", "12:00");
    const eventPlace = window.prompt("Inserisci il luogo dell'evento", "Palestra");
  
    function displayDatesInTopRow() {
        // Assuming `events` is your array of event objects
        const datesHtml = events.map(event => {
          // Convert event.date to a Date object if it's not already one
          const eventDate = new Date(event.date);
          const formattedDate = eventDate.toLocaleDateString('it-IT', {
            weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
          });
          return `<span>${formattedDate}</span>`; // Create a span for each date
        }).join(' '); // Join all spans with a space
      
        // Assuming you have a div with id="topRow" in your HTML
        document.getElementById('topRow').innerHTML = datesHtml;
        }

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