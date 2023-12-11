const express = require("express")
const request = require ("request")

const app =express();
app.get('/',(req,res)=>{
    res.send('Hello , this is weather api!')
})
app.listen(3000,()=> console.log("Server started"))

const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/current.json',
  params: {q: '53.1,-0.13'},
  headers: {
    'X-RapidAPI-Key': '3935b52b26msh17014823e451481p138558jsn1e05357d4eed',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};

try {
	const response = axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}