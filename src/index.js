
// Create the top row container
const topRow = document.createElement('div');
topRow.style.display = 'flex';
topRow.style.justifyContent = 'space-between';
topRow.style.alignItems = 'center';
document.body.appendChild(topRow);


// Import the createNewEvent function
import { createNewEvent } from './newevent.js';

// Existing code to create the "New Event" button
const newEventButton = document.createElement('button');
newEventButton.textContent = 'New Event';
topRow.appendChild(newEventButton);

// Add an event listener to the "New Event" button
newEventButton.addEventListener('click', createNewEvent);



// Create the left arrow button
const leftArrow = document.createElement('button');
leftArrow.textContent = '<';
topRow.appendChild(leftArrow);


// Display the current date
// Display the current date formatted as "sabato 21 settembre 2024"
const dateDisplay = document.createElement('span');
const currentDate = new Date();
dateDisplay.textContent = currentDate.toLocaleDateString('it-IT', {
  weekday: 'long', // Display the full name of the day
  day: 'numeric', // Display the day as a numeric value
  month: 'long', // Display the full name of the month
  year: 'numeric' // Display the year as a numeric value
});
topRow.appendChild(dateDisplay);


// Create the right arrow button
const rightArrow = document.createElement('button');
rightArrow.textContent = '>';
topRow.appendChild(rightArrow);



// Add event listeners to the arrow buttons
leftArrow.addEventListener('click', () => updateDisplayedDate(-1));
rightArrow.addEventListener('click', () => updateDisplayedDate(1));

// Function to update the displayed date with Italian format
function updateDisplayedDate(days) {
    currentDate.setDate(currentDate.getDate() + days);
    dateDisplay.textContent = currentDate.toLocaleDateString('it-IT', {
        weekday: 'long', // "venerdì"
        day: 'numeric', // "20"
        month: 'long', // "settembre"
        year: 'numeric' // "2024"
      });
  }

  topRow.className = 'top-row'; // Apply top-row class to the top row container
dateDisplay.className = 'date-display'; // Apply date-display class to the date display span

document.addEventListener('DOMContentLoaded', () => {
    const topRow = document.getElementById('topRow');
    const eventsContainer = document.getElementById('eventsContainer');
  
   
  
    // Create a page for each date
    dates.forEach(date => {
      const dateDiv = document.createElement('div');
      dateDiv.textContent = date; // Display the date
      dateDiv.addEventListener('click', () => displayEventsForDate(date));
      topRow.appendChild(dateDiv);
  
      // Create a corresponding page for events
      const eventsPage = document.createElement('div');
      eventsPage.id = `events-${date}`;
      eventsPage.style.display = 'none'; // Hide by default
      eventsContainer.appendChild(eventsPage);
    });


    let eventsByDate = {}; // This object maps dates to events
  
    function displayEventsForDate(date) {
        // Hide all events pages
        const allEventsPages = document.querySelectorAll('[id^="events-"]');
        allEventsPages.forEach(page => {
            page.style.display = 'none';
        });
    
        // Show the events page for the clicked date
        const specificEventsPage = document.getElementById(`events-${date}`);
        if (specificEventsPage) {
            specificEventsPage.style.display = 'block';
            specificEventsPage.innerHTML = ''; // Clear existing events
    
            // Check if there are events for this date and display them
            if (eventsByDate[date] && eventsByDate[date].length > 0) {
                eventsByDate[date].forEach(eventDescription => {
                    const eventElement = document.createElement('div');
                    eventElement.textContent = eventDescription;
                    specificEventsPage.appendChild(eventElement);
                });
            } else {
                // Display a message if there are no events for this date
                specificEventsPage.textContent = 'No events for this date.';
            }
        }
    }

      function addEventToDate(date, eventDescription) {
        if (!eventsByDate[date]) {
          eventsByDate[date] = [];
        }
        eventsByDate[date].push(eventDescription);
      
        // Optionally, refresh the display if the date is currently selected
        displayEventsForDate(date);
      }



  });

  import "./styles.css"; // Import the CSS file


