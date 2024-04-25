#!/usr/bin/env node
import { getArgs } from "./helpers/args.js"
import { getWeather } from "./services/api.service.js"
import { printError, printHelp, printSuccess } from "./services/log.service.js"
import { TOKEN_DICTIONARY, saveKeyValue } from "./services/storage.service.js"

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

const initCli = () => {
  const args = getArgs(process.argv)
  if (args.h) {
    printHelp()
  } else if (args.s) {
    getWeather(args.s)
  } else if (args.t) {
    return saveToken(args.t)
  }
  console.log(args)
}

initCli()
