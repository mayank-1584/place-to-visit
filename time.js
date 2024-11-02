// Fetch Places Information
async function loadPlaces() {
    try {
        const response = await fetch('/api/places');
        const places = await response.json();
        const container = document.getElementById('places-container');
        container.innerHTML = places.map(place => `
            <div class="place-card">
                <h3>${place.name}</h3>
                <p>${place.description}</p>
                <p>Distance: ${place.distance} km</p>
                <p>Ticket: ${place.ticket_price}</p>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading places:', error);
    }
}

// Populate Places Dropdown for Itinerary
async function populatePlacesDropdown() {
    const dropdown = document.getElementById('placesDropdown');
    try {
        const response = await fetch('/api/places');
        const places = await response.json();
        places.forEach(place => {
            const option = document.createElement('option');
            option.value = place.id;
            option.text = place.name;
            dropdown.add(option);
        });
    } catch (error) {
        console.error('Error populating dropdown:', error);
    }
}

// Save Custom Itinerary
async function saveItinerary() {
    const days = document.getElementById('days').value;
    const selectedPlaces = Array.from(document.getElementById('placesDropdown').selectedOptions).map(option => option.value);

    const itinerary = {
        days: days,
        places: selectedPlaces
    };

    try {
        const response = await fetch('/api/itineraries', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(itinerary)
        });
        const result = await response.json();
        alert('Itinerary saved successfully!');
    } catch (error) {
        console.error('Error saving itinerary:', error);
    }
}

// Initialize page content
document.addEventListener('DOMContentLoaded', () => {
    loadPlaces();
    populatePlacesDropdown();
});
