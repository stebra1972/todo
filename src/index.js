import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
    const topRow = document.createElement('id');
    const eventButton = document.createElement('button');
    const leftArrow = document.createElement('button');
    const rightArrow = document.createElement('button');
    const dateDisplay = document.createElement('span');
    const eventsContainer = document.createElement('div');
    

    let currentDate = new Date();

    eventButton.textContent = 'Evento';
    leftArrow.textContent = '<';
    rightArrow.textContent = '>';
    dateDisplay.textContent = formatDate(new Date()); // Format the initial date

    document.body.appendChild(topRow); // Append the topRow to the document body
    topRow.appendChild(leftArrow);
    topRow.appendChild(dateDisplay);
    topRow.appendChild(rightArrow);
    topRow.appendChild(eventButton); // Append eventButton to topRow
    document.body.appendChild(eventsContainer); // Ensure eventsContainer is still appended to the document body


    function formatDate(date) {
        return date.toLocaleDateString('it-IT', {
            weekday: 'long', // nome del giorno della settimana
            day: 'numeric', // il giorno del mese
            month: 'long', // il mese
            year: 'numeric' // l'anno
        });
    }


document.body.appendChild(eventsContainer);

leftArrow.addEventListener('click', () => {
    currentDate.setDate(currentDate.getDate() - 1);
    dateDisplay.textContent = formatDate(currentDate);
    displayEventsForCurrentDate();
});

rightArrow.addEventListener('click', () => {
    currentDate.setDate(currentDate.getDate() + 1);
    dateDisplay.textContent = formatDate(currentDate);
    displayEventsForCurrentDate();
});

    eventButton.addEventListener('click', () => {
        const ora = prompt('Ora:');
        const data = currentDate.toDateString(); // Use the displayed date
        const luogo = prompt('Luogo:');
        const evento = prompt('Evento:');
        const eventDetails = { ora, data, luogo, evento };

        let events = JSON.parse(localStorage.getItem('events')) || {};
        if (!events[data]) {
            events[data] = [];
        }
        events[data].push(eventDetails);
        localStorage.setItem('events', JSON.stringify(events));

        displayEventsForCurrentDate();
    });

    function displayEventsForCurrentDate() {
        eventsContainer.innerHTML = ''; // Clear previous events
        const dateString = currentDate.toDateString();
        const events = JSON.parse(localStorage.getItem('events')) || {};
        const eventsForDate = events[dateString] || [];
    
        eventsForDate.forEach((event, index) => {
            const eventDiv = document.createElement('div');
            eventDiv.textContent = `Ora: ${event.ora}, Luogo: ${event.luogo}, Evento: ${event.evento}`;
    
            // Create delete button for each event
            const deleteButton = document.createElement('button');
            deleteButton.style.width = '120px';
            deleteButton.style.height = '40px';
            
            deleteButton.textContent = 'Eseguito';
            
            deleteButton.onclick = () => {
                // Remove the event from the array and update local storage
                eventsForDate.splice(index, 1);
                events[dateString] = eventsForDate;
                localStorage.setItem('events', JSON.stringify(events));
                // Re-display events for the current date
                displayEventsForCurrentDate();
            };
    
            eventDiv.appendChild(deleteButton);
            eventsContainer.appendChild(eventDiv);
        });
    }
    



    displayEventsForCurrentDate(); // Display events for the current date on load
});
