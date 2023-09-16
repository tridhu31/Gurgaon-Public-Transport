function findNearestBusStop(location) {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${location}, Gurgaon, India`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data && data.length > 0) {
          const closestStation = data[0].display_name; // Extracting the closest station name
  
          displayBusStopInfo(closestStation);
        } else {
          alert('Location not found. Please enter a valid location.');
        }
      })
      .catch(error => console.error('Error fetching location:', error));
  }
  
  function displayBusStopInfo(stationName) {
    const busStopInfoElement = document.getElementById('busStopInfo');
    busStopInfoElement.style.display = 'block';
    busStopInfoElement.innerHTML = `
      <h2>Closest Bus Station</h2>
      <p>Name: ${stationName}</p>
    `;
  }
  
  document.getElementById('busStopForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const location = document.getElementById('location').value;
    findNearestBusStop(location);
  });
  