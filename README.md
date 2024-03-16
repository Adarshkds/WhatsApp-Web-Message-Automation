# WhatsApp Message Automation

## Overview
This script leverages Puppeteer, a Node.js library, to automate sending messages on WhatsApp Web. It currently opens WhatsApp in Chrome for testing purposes and requires scanning the QR code every time you wish to use it.

## Setup
1. Ensure you have Node.js installed on your system.
2. Clone or download this repository to your local machine.
3. Install dependencies by running `npm install` in the project directory.
4. Open the `quotes.js` file and customize the `quotes` object to include the messages you want to send.
5. Edit the `friendName` variable in the script to match the name of the friend or contact you intend to send messages to.
6. Adjust the delay in the `delay` function according to your preference (default is 2000 milliseconds).
7. Run the script by executing `node app.js`.

## Important Notes
- This script is primarily designed for testing purposes and requires manual intervention to scan the WhatsApp Web QR code.
- Make sure Chrome is installed on your system and set as the default browser.
- A stable internet connection is necessary to use WhatsApp Web.
- Ensure the `friendName` variable exactly matches the name of your friend or contact as it appears in your WhatsApp contacts list.

## Known Issue
**Issue:** The script consistently opens WhatsApp Web in Chrome testing mode instead of the user's own Chrome browser, resulting in the need to scan the QR code each time.
  
**Contributions Welcome:** If you have knowledge or a solution to make WhatsApp Web open in the user's own Chrome browser, please contribute to the project.

Feel free to modify the script according to your requirements and preferences. Contributions and suggestions are welcome!
