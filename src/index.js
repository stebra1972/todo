
// Create the top row container
const topRow = document.createElement('div');
topRow.style.display = 'flex';
topRow.style.justifyContent = 'space-between';
topRow.style.alignItems = 'center';
document.body.appendChild(topRow);

// Create the "New Event" button
const newEventButton = document.createElement('button');
newEventButton.textContent = 'New Event';
topRow.appendChild(newEventButton);

// Create the left arrow button
const leftArrow = document.createElement('button');
leftArrow.textContent = '<';
topRow.appendChild(leftArrow);


// Display the current date
const dateDisplay = document.createElement('span');
const currentDate = new Date();
dateDisplay.textContent = currentDate.toLocaleDateString();
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

  import "./styles.css"; // Import the CSS file


