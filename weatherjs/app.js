const weather = new Weather('kolkata');
//weather.changeLocation('Delhi');
document.addEventListener('DOMContentLoaded',getWeather);
function getWeather(){
weather.getWeather()
.then(results => {
    console.log(results);
})
.catch(err => console.log(err));
}
