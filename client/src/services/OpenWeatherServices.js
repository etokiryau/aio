import fetch from "node-fetch";

export const OpenWeatherServices = () => {
    const _apiKey = '1f9bd7e8-da1e-4898-b41b-db29313a614b';
    const _apiBase = 'https://api.weather.yandex.ru/v1/forecast?';
    const url = `${_apiBase}lat=50&lon=0`;

    const request = async (url) => {
        const data = await fetch(url, {
            method: 'GET',
            headers: {
                'X-Yandex-API-Key': _apiKey
            }
        })
        .then(response => response.json())
        .catch(error => console.error(error));

        return data;
    }

    const data = request(url);

    return {
        data: data,
        curTemp: data.fact.temp,
        curCondition: data.fact.condition,
        firstTemp: data.forecast[0].parts[0].temp_max
    };
}

export default OpenWeatherServices;

// const _apiKey = '00653fe32b3f4e0c617d551b365c628f';
// const _apiBase = 'https://api.openweathermap.org/data/2.5';
// const url = 'https://api.openweathermap.org/data/2.5/weather?lat=50&lon=0&units=metric&appid=00653fe32b3f4e0c617d551b365c628f'

// const request = async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {

//     try {
//         const response = await fetch(url);
//         const data = JSON.parse(response.json());
//         // console.log(data)
//         // if (!response.ok) {
//         //     throw new Error(`Could not fetch: ${url}, status: ${response.status}`)
//         // }

        
//         return data;
//     } catch(e) {
//         throw e;
//     }
// }