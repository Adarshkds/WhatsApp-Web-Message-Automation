WhatsApp Message Automation
Overview
This script utilizes Puppeteer, a Node library, to automate sending messages on WhatsApp Web. It opens WhatsApp in Chrome for testing purposes and requires scanning the QR code every time you want to use it.

Setup
Ensure you have Node.js installed on your system.
Clone or download this repository to your local machine.
Install dependencies by running npm install in the project directory.
Open the quotes.js file and customize the quotes object to contain the messages you want to send.
Edit the friendName variable in the script to match the name of the friend or contact you want to send messages to.
Adjust the delay in the delay function according to your preference (default is 2000 milliseconds).
Run the script by executing node sendMessage.js.
Important Notes
This script is designed for testing purposes and requires manual intervention to scan the WhatsApp Web QR code.
Ensure that Chrome is installed on your system and is set as the default browser.
You need to have a stable internet connection to use WhatsApp Web.
The friendName variable must exactly match the name of your friend or contact as it appears in your WhatsApp contacts list.
Known Issue
Issue: The script always opens WhatsApp Web in Chrome testing mode instead of the user's own Chrome browser. This results in having to scan the QR code every time the script is run.
Contributions Welcome: If you have knowledge or a solution to make WhatsApp Web open in the user's own Chrome browser, please contribute to the project.
Feel free to modify the script according to your needs and preferences.
