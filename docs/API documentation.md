# Description of API

## Request parameters
Name | isRequired | Description
--- | --- | ---
q | true | City name, state code and country code divided by comma, use ISO 3166 country codes.
app_id | true | 	Your unique API key (you can always find it on your account page under the "API key" tab)
units | false | Units of measurement. standard, metric and imperial units are available.
lang | false | You can use this parameter to get the output in your language
 | | 
## Return parameters
Name | Type | Description
--- | --- | ---
coord | Array | Keeps latitude and longitude of localization
coord.lon | Float |  City geo location, longitude
coord.lat | Float |  City geo location, latitude
weather | Array | Keeps weather information
weather.id | Integer | Weather condition id
weather.main | String | Return one of enum values [Rain, Snow, Extreme etc]
weather.description | String | Weather condition within the group
weather.icon | Integer | Weather icon id
base | String | Internal parameter
main | Array | Keeps weather. temperature
main.temp | Float | Average temperature. Can be in Kelvin,Celsius or Farenheit
main.feels_like | Float | his temperature parameter accounts for the human perception of weather. . Can be in Kelvin,Celsius or Farenheit
main.temp_min | Float | Mininum temperature. Can be in Kelvin,Celsius or Farenheit
main.temp_max | Float | Maximum temperature. Can be in Kelvin,Celsius or Farenheit
main.pressure | Integer | Atmospheric pressure
main.humidity | Integer | Humidity in %
visibility | Integer | Average visisibility
wind | Array | Wind parameters
wind.speed | Float | Wind speed
wind.deg | Float | Wind direction, degrees (meteorological)
clouds | Array | Clouds parameters
clouds.all | Integer | Cloudiness, %
dt | long int | Time of data calculation, unix, UTC
sys | Array | System parameters
sys.type | integer | Internal parameter
sys.id | Integer | Internal parameter
sys.country | String | Country code
sys. sunrise | long int | Sunrise time, unix, UTC
sys.sunset | long int | Sunset time, unix, UTC
timezone | Integer | Shift in seconds from UTC
id | Integer | City id
name | String | City name
cod | Integer | Internal. parameter


## Examples

-  ## Request example
```
https://api.openweathermap.org/data/2.5/weather?q=London&appid=29dce02c8a2f97ff423e9f733810cfa7
```
- ## Example returned
```
{"coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"base":"stations","main":{"temp":287.42,"feels_like":283.82,"temp_min":287.04,"temp_max":288.15,"pressure":997,"humidity":82},"visibility":5000,"wind":{"speed":5.7,"deg":250},"clouds":{"all":99},"dt":1601920100,"sys":{"type":1,"id":1414,"country":"GB","sunrise":1601878087,"sunset":1601918958},"timezone":3600,"id":2643743,"name":"London","cod":200}
```

## Sources
- [Official OpenWeather API guide](https://openweathermap.org/current)