function buildDOMObjects(forecastData,location) {
    $('#forecast').empty()
    console.log(forecastData);
    console.log(location)
    for (let i = 0; i < forecastData.length; i++) {


        let temp = forecastData[i].main.temp;
        let feels = forecastData[i].main.feels_like;
        let max = forecastData[i].main.temp_max;
        let low = forecastData[i].main.temp_min;
        let des = forecastData[i].weather[0].description;
        let city = location.name

        let timeDate = forecastData[i].dt;
        console.log(timeDate);

        timeDate = new Date(timeDate * 1000);

        let formattedTime = new Date(timeDate).toDateString()

        console.log(formattedTime);


        $('#forecast').append(`
<div class="card" style=“width: 18rem“>
        <div class="card-body">
            <h5 class="card-title">${city}</h5>
            <br>
            ${formattedTime}
            <p class="card-text"> Temp outside is ${temp}
            <br>
            ${des}
            <br>
            It feels like ${feels}
            <br>
            High temp: ${max}
            <br>
            Low temp: ${low}
            </p>
        </div>
</div> `)
    }
}