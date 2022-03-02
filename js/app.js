const API_KEY = `84e08cc7fb4aabfffc33ef6769ba664b`;

const temperatureLoad = () => {
    const searchInput = document.getElementById('city-search');
    const searchValue = searchInput.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(json => displayTemperature(json));
    searchInput.value = '';
}

const setText = (id, text) => {
    document.getElementById(id).innerText = text;
    document.getElementById(id).src = text;
}

const displayTemperature = data => {
    console.log(data);
    const url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    setText('city-name', data?.name ?data?.name:'Not Found'); 
    setText('temperature', data?.main?.temp ?data?.main?.temp:'Not Found'); 
    setText('t-environment', data?.weather[0]?.main ?data?.weather[0]?.main:'Not Found'); 
    setText('t-icon', url);
}