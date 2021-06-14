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
<div class="card col-2 mx-3" style='width: 18rem'>
        <div class="card-body">
            <h5 class="card-title text-center" style="background-color: lightblue">${city}</h5>
            <hr>
            ${formattedTime}
            <hr>
            <p class="card-text"> Temp outside is ${temp}
            <hr>
            ${des}
            <hr>
            It feels like ${feels}
            <hr>
            High temp: ${max}
            <hr>
            Low temp: ${low}
            </p>
       </div>
</div> `)
    }
}

// $('#bar').css('visibility', 'hidden');