const settings = {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)"
    },
    "url": "https://dataservice.accuweather.com/currentconditions/v1/53286?details=true&apikey=LBpc8o23TjwLcElAgBf7GWzwCGMzZPVG"
};


    
const url = "https://dataservice.accuweather.com/currentconditions/v1/";
const apiKey = "LBpc8o23TjwLcElAgBf7GWzwCGMzZPVG";
const locationKey = 53286;

const fetchSettings = {
    method: "GET",
    headers: {
        "Accept": "application/json",
    }
};
function getWeather(locationKey) {
    const fullUrl =`${url}${locationKey}?details=true&apikey=${apiKey}`;

    return fetch (fullUrl, fetchSettings)
    .then (response => {
        if (!response.ok) {
            throw new Error ('Today weather for you awful;'+ response.statusText);
        }
        return response.json();
    })
    .then(data => {
        const weatherDiv = document.getElementById('weatherForecast');
        const temperature = data[0] && data [0].Temperature.Metric.Value;
        weatherDiv.innerHTML = `<p>Current temperature: ${temperature}°C</p>`;
    })
    .catch (error => {
        console.error ('Fetch error:', error);
    });
}
console.log(getWeather(53286));


getWeather (53286).then (()=> {
    console.log ('weather successfuly:');
}).catch(error => {
    console.error ('I have eror',error)
})


