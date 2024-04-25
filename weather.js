#!/usr/bin/env node
import { getArgs } from "./helpers/args.js"
import { printError, printHelp, printSuccess } from "./services/log.service.js"

const initCli = () => {
  const args = getArgs(process.argv)
  console.log(args)
  printError('Ho')
  printSuccess('dd')
  printHelp()
}

initCli()
