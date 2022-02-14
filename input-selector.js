const Gpio = require('onoff').Gpio
const relays = [
	new Gpio(16, 'out'),
	new Gpio(12, 'out'),
	new Gpio(27, 'out'),
	new Gpio(33, 'out'),
]

const args = process.argv.slice(2)
const inputSelected = args[0]

relays.forEach(relay => relay.writeSync(0))
relays[inputSelected].writeSync(1)
