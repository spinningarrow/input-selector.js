# input-selector.js

Script to change audio inputs using a Raspberry Pi.

## Install

1. Install node
2. Install the dependencies using npm
3. Run on boot:

        systemctl link $PWD/inputselector.service
        systemctl enable inputselector
