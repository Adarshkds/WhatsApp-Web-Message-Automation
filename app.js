const puppeteer = require('puppeteer');

const { quotes } = require('./quotes');

async function sendMessage() {
  const browser = await puppeteer.launch({ 
    headless: false, 
  }); 

  const page = await browser.newPage(); // Open a new page

  // Navigate to WhatsApp Web
  await page.goto('https://web.whatsapp.com');

  // Wait for the QR code to be scanned and page to start loading
  await Promise.all([
    page.waitForSelector('div[data-ref-id="qr-container"]', { hidden: true }),
    page.waitForNavigation() // Wait for navigation to complete
  ]);

  const friendName = "Mayank"; // Replace with the name of your friend

  // Wait for the friend's chat to appear, with a timeout of 10 seconds
  try {
    await page.waitForSelector(`span[title="${friendName}"]`, { timeout: 10000 });
  } catch (error) {
    console.error('Timeout waiting for friend chat element:', error);
    await browser.close(); // Close the browser if the friend's chat element is not found
    return;
  }

  // Click on the friend's chat to enter it
  await page.click(`span[title="${friendName}"]`);

  // Wait for the input field to appear in the chat
  await page.waitForSelector('div[title="Type a message"]');

  // Click on the input field to focus it
  await page.click('div[title="Type a message"]');

  for (const word of Object.keys(quotes)) {
    // Type the message into the input field
    await page.keyboard.type(word);

    // Press Enter to send the message
    await page.keyboard.press('Enter');

    // Wait for 2 seconds before sending the next message
    await delay(2000); // you can change the delay time
  }

  // Optional: Close the browser after sending all messages
  // await browser.close();
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

sendMessage();
