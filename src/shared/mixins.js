import axios from 'axios'

export default {
    methods: {
        isUndefinedOrZero: (input) => {
            return input === undefined || input === null || input === 0
        }
    }
}

export function isUndefinedOrZero(input) {
    return !input
}

export async function getCurrentLondonWeatherData(location = 'London') {
    const proxyUri = `https://cors-anywhere.herokuapp.com`;
    const meteoServiceUri = `https://samples.openweathermap.org/data/2.5/find?q=${location}&units=metric`;
    const apiKey = `appid=5e76c6028b0036d290e16bc34dabd6bb`;
    const baseURI = `${proxyUri}/${meteoServiceUri}&${apiKey}`;
    return await axios.get(baseURI).then(response => {
        const weatherInfo = response && response.data ? response.data : null
        if (!weatherInfo) {
            Promise.reject(`Weather information for the city of ${location} not found!`, response)
        };
        if (weatherInfo.list && weatherInfo.list.length > 0) {
            return Promise.resolve(weatherInfo.list[0])
        }
    }).catch(err => {
        throw Error(`Getting weather info for the city of ${location} has failed!`, err)
    })
}