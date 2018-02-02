// API KEY 93775c6e61ef4ad982559d11759b90c8
// kelvin to fahrenheit F = 9/5 (K - 273) + 32

$(document).ready(function () {
    $("form").submit(function () {
        var city = $("#city").val()
        $.get("http://api.openweathermap.org/data/2.5/weather?q="+ city+ "&&appid=93775c6e61ef4ad982559d11759b90c8", function(res) {
            var temperature = res.main.temp;
            var convert = Math.round(9/5 * (temperature - 273) + 32);
            $("#weather").append("<h1>" + city + "</h1><p>Temperature: " + convert + "</p>");
        }, "json");

        return false;
    });
});