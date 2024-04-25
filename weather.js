#!/usr/bin/env node
import { getArgs } from "./helpers/args.js"
import { printError, printHelp, printSuccess } from "./services/log.service.js"
import { saveKeyValue } from "./services/storage.service.js"

const saveToken = async (token) => {
  try {
    await saveKeyValue('token', token)
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
    printSuccess('dd')
  } else if (args.t) {
    return saveToken(args.t)
  }
  console.log(args)
}

initCli()
