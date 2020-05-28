const axios = require('axios');
const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=1d2a249adccb20ed1434630ddd92257a&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}