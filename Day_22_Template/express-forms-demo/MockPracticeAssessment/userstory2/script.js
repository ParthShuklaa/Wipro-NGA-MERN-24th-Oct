// Event Dashboard Script using ES6 features

// Function to fetch events data 
const fetchEvents = async () => {
    try {
        const response = await fetch('events.json');
        if (!response.ok) {
            throw new Error('Failed to fetch events');
        }
        const events = await response.json();
        return events;
    } catch (error) {
        console.error('Error fetching events:', error);
        return [];
    }
};

// Function to render event cards
const renderEvents = (events) => {
    const container = document.getElementById('eventsContainer');
    container.innerHTML = ''; // Clear previous content

    // Create event cards
    events.forEach(event => {
        const { id, title, category, date, description, image } = event; 
        const eventCard = `
            <div class="col-md-6 event-card">
                <div class="card">
                    <img src="${image}" class="card-img-top" alt="${title}">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text"><strong>Category:</strong> ${category}</p>
                        <p class="card-text"><strong>Date:</strong> ${date}</p>
                        <p class="card-text">${description}</p>
                    </div>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', eventCard);
    });
};

// Function to filter events
const filterEvents = (events, category, date) => {
    return events.filter(event => {
        const categoryMatch = !category || event.category === category;
        const dateMatch = !date || event.date === date;
        return categoryMatch && dateMatch;
    });
};

// Main function to initialize the dashboard
const initDashboard = async () => {
    let events = await fetchEvents();
    renderEvents(events);

    // Event listeners for filters
    document.getElementById('filterBtn').addEventListener('click', () => {
        const category = document.getElementById('categoryFilter').value;
        const date = document.getElementById('dateFilter').value;
        const filteredEvents = filterEvents(events, category, date);
        renderEvents(filteredEvents);
    });
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initDashboard);
