import chalk from "chalk";
import dedent from 'dedent-js'

export const printError = (error) => {
  console.log(chalk.bgRed('ERROR' + ' ' + error))
}

export const printSuccess = (msg) => {
  console.log(chalk.bgGreen('SUCCESS' + ' ' + msg))
}

export const printHelp = () => {
  console.log(dedent(`
    ${chalk.bgMagenta('HELP')} 
    without parameters - weather output
    -s [CITY] to install the city
    -h to display help
    -t [API_KEY] to save token
  `))
}

export const printWeather = (res) => {
  console.log(dedent(`${chalk.bgGreen('Weather')} in city ${res.name}
  ${res.weather[0].description}
  Temperature ${res.main.temp} (feel like: ${res.main.feals_like})
  Humidity ${res.main.humidity} %
  Wind ${res.wind.speed}`)) 
}
