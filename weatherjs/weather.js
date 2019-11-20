class Weather{
    constructor(city){
        this.apikey = '1AXlTaWGGf7QA9XJDdTOwG4kY1PQPz6d';
        this.city = city; 
    }
    async getWeather(){
        const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${this.apikey}&q=${this.city}`);    
        const responseData = await response.json();
        return responseData;
    }
    changeLocation(city){
        this.city = city;   
    }
    }