// Define a function to open a popup window for input
function createNewEvent() {
    // Use window.prompt to ask for event name
    const eventName = window.prompt("Enter the name of the new event:", "New Event");
    
    // Check if the user entered a name
    if (eventName) {
      console.log(`New Event Created: ${eventName}`);
    } else {
      console.log("Event creation was cancelled.");
    }
  }
  
  // Export the function
  export { createNewEvent };