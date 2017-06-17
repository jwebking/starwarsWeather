var lat;
var lon;
var tempF;
var tempC;

$.ajax({
  url: "https://freegeoip.net/json/",
  type: "GET",
  datatype: "json",
  success: function (location) {
    var lat = location.latitude;
    var lon = location.longitude;
    var city = location.city;
    var timeZone = location.time_zone;
    var state = location.region_code;
    var country = location.country_name;

    $.ajax({
      url:
      "https://api.forecast.io/forecast/8a450658f6a7dd2ef6f8a9146d1d0905/" +
      lat +
      "," +
      lon,
      jsonp: "callback",
      dataType: "jsonp",
      success: function (data) {
        var weatherCurr = data.currently.summary;
        var weatherMin = data.minutely.summary;
        var weatherIcon = data.currently.icon;
        var weatherImage = "wi wi-forecast-io-" + weatherIcon;
        var windSpeed = data.currently.windSpeed;
        var windSpeedKmh = windSpeed * 1.6;
        var roundedWindSpeed = Math.round(windSpeed);
        var roundedWindSpeedKmh = Math.round(windSpeedKmh);
        var temp = data.currently.temperature;
        var tempF = Math.round(temp);
        var tempC = Math.round((temp - 32) * 5 / 9);
        var precipProb = data.currently.precipProbability;
        var cloudCityCloudy = "https://i.imgur.com/BY9Vm3j.jpg";
        var tattooineDay =
          "http://vignette2.wikia.nocookie.net/starwars/images/5/53/Encounter_in_the_Desert.png/revision/latest?cb=20121219155937";
        var coruscantNight =
          "http://vignette1.wikia.nocookie.net/starwars/images/0/01/PadmeApartmentBalcony-ROTS.png/revision/latest?cb=20130212045009";
        var kaminoRain =
          "http://a.dilcdn.com/bl/wp-content/uploads/sites/6/2015/09/Image-00-Header-1536x864-688067241292.jpg";
        var dagobahFog = "http://swatb.ru/files/sw/5/dagobah/02/12.jpg";
        var KyloSnow = "https://i.ytimg.com/vi/tJwaiH_JnmE/maxresdefault.jpg";
        var hothSleet =
          "http://pre05.deviantart.net/2c04/th/pre/f/2016/046/9/7/hoth_crushes__luke_skywalker_x_reader_x_han_solo__by_skystar54-d9pocda.jpg";
        var endorWindy =
          "http://a.dilcdn.com/bl/wp-content/uploads/sites/6/2016/10/speeder-bikes-leia-jedi.jpg";
        var nabooPartCloud =
          "http://a.dilcdn.com/bl/wp-content/uploads/sites/6/2014/07/Image-1.jpg";
        var partCloudNight =
          "http://site.disneyinternational.com/sites/default/files/Star%20Wars/Gallery/Sustain%202/sw_lgi_gallery_03.jpg";
        var fighterPilot =
          "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/12/16/07/star-wars-the-force-awakens.jpeg";

        $(".icon").append("<i></i>");
        $(".icon i").addClass(weatherImage);
        $(".info").append(weatherMin);
        $(".trueTemp").append(tempF + "° F");
        $(".wind").append(roundedWindSpeed + " mph");

        $(".cityState").append(city + ", " + state);
        $(".country").append(country);
        $(".precipProb").append(precipProb + " %");

        switch (weatherIcon) {
          case "clear-night":
            $("#theBody").css({
              backgroundImage: "url(" + coruscantNight + ")"
            });
            break;
          case "clear-day":
            $("#theBody").css({ backgroundImage: "url(" + tattooineDay + ")" });
            break;
          case "partly-cloudy-night":
            $("#theBody").css({
              backgroundImage: "url(" + partCloudNight + ")"
            });
            break;
          case "partly-cloudy-day":
            $("#theBody").css({
              backgroundImage: "url(" + nabooPartCloud + ")"
            });
            break;
          case "rain":
            $("#theBody").css({ backgroundImage: "url(" + kaminoRain + ")" });
            break;
          case "snow":
            $("#theBody").css({ backgroundImage: "url(" + KyloSnow + ")" });
            break;
          case "sleet":
            $("#theBody").css({ backgroundImage: "url(" + hothSleet + ")" });
            break;
          case "wind":
            $("#theBody").css({ backgroundImage: "url(" + endorWindy + ")" });
            break;
          case "fog":
            $("#theBody").css({ backgroundImage: "url(" + dagobahFog + ")" });
            break;
          case "cloudy":
            $("#theBody").css({
              backgroundImage: "url(" + cloudCityCloudy + ")"
            });
            break;
          default:
            $("#theBody").css({ backgroundImage: "url(" + fighterPilot + ")" });
        }



        $(".fahr").click(function () {
          $(".trueTemp").text(tempF + "° F");
          $(".wind").text(roundedWindSpeed + " mph");
        });

        $(".cels").click(function () {
          $(".trueTemp").text(tempC + "° C");
          $(".wind").text(roundedWindSpeedKmh + " km/h");
        });
      }
    });
  }
});
