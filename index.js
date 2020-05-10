let request = require('request');//request 
const argv = require('yargs').argv;

let apiKey = '76dc9412992bde0b9ae927f6c6ddc864';//api key as a variable
let city = argv.c || 'palo alto';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`




request(url, function(err, response, body){
    if(err){
        console.log('error:',error);
    }else{
        let weather = JSON.parse(body);
        let message = `Its ${weather.main.temp} degrees in ${weather.name}!`;
        console.log(message);
    }




});