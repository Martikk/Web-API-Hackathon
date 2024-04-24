const settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://dataservice.accuweather.com/currentconditions/v1/53286?details=true&apikey=LBpc8o23TjwLcElAgBf7GWzwCGMzZPVG",
    "method": "GET",
    "headers": {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Authorization": "Basic c3RlZmFucmVlOndlYXRoZXI=LBpc8o23TjwLcElAgBf7GWzwCGMzZPVG"
    }
  };
  
    console.log(settings);

    
const url = "http://dataservice.accuweather.com/currentconditions/v1/";
const apiKey = "LBpc8o23TjwLcElAgBf7GWzwCGMzZPVG";

const fetchSettings = {
    method: "GET",
    headers: {
        "Accept": "application/json",
    }
};
function getWeather(locationKey) {
    const fullUrl =`${url}${locationKey}?apikey=${apikey}`;

    fetch (fullUrl, fetchSettings)
    .then (Response => {
        if (!Response.ok) {
            throw new Error ('Today weather for you awful;'+ Response.statusText);
        }
        return response.json();
    })
    .catch (error => {
        console.error ('Fetch error:', error);
    });
}
getWeather ('New')
