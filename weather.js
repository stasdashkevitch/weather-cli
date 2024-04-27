#!/usr/bin/env node
import { getArgs } from "./helpers/args.js"
import { getWeather } from "./services/api.service.js"
import { printError, printHelp, printSuccess, printWeather } from "./services/log.service.js"
import { TOKEN_DICTIONARY, getKeyValue, saveKeyValue } from "./services/storage.service.js"

const saveToken = async (token) => {
  if (!token.length) {
    printError('token not transferred')
    return
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token)
    printSuccess('Token saved')
  } catch (e) {
    printError(e.message)
  }
}

const saveCity = async (city) => {
  if (!city.length) {
    printError('city not transferred')
    return
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.city, city)
    printSuccess('City saved')
  } catch (e) {
    printError(e.message)
  }
}

const getForcast = async () => {
  try {
    const city = process.env.CITY ?? await getKeyValue(TOKEN_DICTIONARY.city)
    const weather = await getWeather(city)
    printWeather(weather)
  } catch (e) {
    if (e?.response?.status == 404) {
      printError('Invalid city') 
    } else if (e?.response?.status == 401) {
      printError('Invalid token')
    } else {
      printError(e.message)
    }
  }
}

const initCli = () => {
  const args = getArgs(process.argv)
  if (args.h) {
    return printHelp()
  } else if (args.s) {
    return saveCity(args.s)
  } else if (args.t) {
    return saveToken(args.t)
  }
  getForcast()
}

initCli()
