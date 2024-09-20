// Define a function to open multiple popup windows for input
function createNewEvent() {
    // Use window.prompt to ask for event name
    const eventName = window.prompt("Enter the name of the new event:", "Allenamento");
    
    // Only proceed if eventName is provided
    if (eventName) {
      // Ask for additional details
      const eventDate = window.prompt("Inserisci la data dell'evento:", "01/01/2022");
      const eventTime = window.prompt("Inserisci l'ora dell'evento:", "12:00");
      const eventPlace = window.prompt("Inserisci il luogo dell'evento", "Palestra");
      
      // Construct event details string
      const eventDetails = `Event Name: ${eventName}\nTime: ${eventTime}\nDate: ${eventDate}\nPlace: ${eventPlace}`;
      
      // Log event details
      console.log(`New Event Created:\n${eventDetails}`);
    } else {
      console.log("Event creation was cancelled.");
    }
  }
  
  // Export the function
  export { createNewEvent };