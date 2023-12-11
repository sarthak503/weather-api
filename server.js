const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const apiKey = '0a98477efac6a62bd55eb6c73cc3494d'; // Replace with your weather API key

app.use(express.json());
app.use(cors());

app.post('/getWeather', async (req, res) => {
  const { cities } = req.body;
  const weatherData = {};

  try {
    const promises = cities.map(async (city) => {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      const temperature = response.data.main.temp;
      weatherData[city] = `${temperature}°C`;
    });

    await Promise.all(promises);
    res.json({ weather: weatherData });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
