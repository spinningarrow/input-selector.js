const { exec } = require('child_process')
const http = require('http')

const requestListener = (req, res) => {
	const selectedInput = req.headers['x-input-selected']
	exec(`node /data/plugins/system_controller/gpio_control/input-selector.js ${selectedInput}`)

	res.writeHead(200)
	res.end(`Selected: ${selectedInput}`)
}

const server = http.createServer(requestListener)
server.listen(8001)
