const API_KEY = "2415efb1563db0610db595cf2f53b466";

// Function to fetch weather data
export async function fetchWeatherData(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
//  Error handling for fetch operation
    if (!response.ok) {
        throw new Error("Unable to fetch weather data");
    }

    return await response.json();
}

// Function to display weather in UI
export function displayWeather(data) {
    const resultDiv = document.getElementById("result");
    
    // Clear previous results
   resultDiv.innerHTML = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Condition: ${data.weather[0].description}</p>
    `;
}

// Error handling UI method
export function showError(message) {
    document.getElementById("result").innerHTML =
        `<p style='color:red;'>${message}</p>`;
}
