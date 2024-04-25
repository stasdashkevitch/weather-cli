import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js'
import axios from 'axios'

export const getWeather = async (city) => {
  const token = await getKeyValue(TOKEN_DICTIONARY.token)
  if (!token) {
    throw new Error('API key not specified')
  }

  const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
    params: {
      q: city,
      appid: token,
      lang: 'ru',
      units: 'metric'
    }
  })

  return data
}
