document.addEventListener('DOMContentLoaded', () => {
    const topRow = document.createElement('div');
    const eventButton = document.createElement('button');
    const leftArrow = document.createElement('button');
    const rightArrow = document.createElement('button');
    const dateDisplay = document.createElement('span');
    const eventsContainer = document.createElement('div');
    let currentDate = new Date();



    eventButton.textContent = 'Event';
    leftArrow.textContent = '<';
    rightArrow.textContent = '>';
    dateDisplay.textContent = currentDate.toDateString();

    document.body.appendChild(eventButton);
    topRow.appendChild(leftArrow);
    topRow.appendChild(dateDisplay);
    topRow.appendChild(rightArrow);
    document.body.appendChild(topRow);
    
    document.body.appendChild(eventsContainer);

    leftArrow.addEventListener('click', () => {
        currentDate.setDate(currentDate.getDate() - 1);
        dateDisplay.textContent = currentDate.toDateString();
        displayEventsForCurrentDate();
    });

    rightArrow.addEventListener('click', () => {
        currentDate.setDate(currentDate.getDate() + 1);
        dateDisplay.textContent = currentDate.toDateString();
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
            deleteButton.textContent = 'Delete';
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

import './styles.css';