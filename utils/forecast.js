const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=5324bc607f6dd873a80032a6887dc470&query=' + latitude +','+ longitude + '&units=f';
    request({ url, json: true}, (error, { body }) => {
        if(error){
            callback('Unable to connect to weatherstack services', undefined);
        } else if(body.error){
            callback('Unable to get forecast try another search', undefined);
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degress out.")
        }
    })
}

module.exports = forecast
