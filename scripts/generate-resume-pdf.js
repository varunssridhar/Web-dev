/**
 * Generates public/resume.pdf from the /resume page.
 * Run with the dev server up: npm run dev (then in another terminal) npm run generate-resume-pdf
 * Or with production build: npm run build && npm run start (then) npm run generate-resume-pdf
 */
const http = require('http');
const path = require('path');

const BASE_URL = process.env.RESUME_URL || 'http://localhost:3000';
const OUTPUT_PATH = path.join(__dirname, '..', 'public', 'resume.pdf');

function waitForServer(url, maxAttempts = 30) {
  return new Promise((resolve, reject) => {
    let attempts = 0;
    function tryConnect() {
      attempts++;
      const req = http.get(url, (res) => {
        resolve();
      });
      req.on('error', () => {
        if (attempts >= maxAttempts) reject(new Error('Server did not become ready in time. Is npm run dev (or npm run start) running?'));
        else setTimeout(tryConnect, 1000);
      });
    }
    tryConnect();
  });
}

async function main() {
  let puppeteer;
  try {
    puppeteer = require('puppeteer');
  } catch {
    console.error('Puppeteer is not installed. Run: npm install puppeteer --save-dev');
    process.exit(1);
  }

  console.log('Waiting for server at', BASE_URL, '...');
  await waitForServer(BASE_URL);

  const browser = await puppeteer.launch({ headless: true });
  try {
    const page = await browser.newPage();
    await page.goto(`${BASE_URL}/resume`, { waitUntil: 'networkidle0', timeout: 15000 });
    await page.pdf({
      path: OUTPUT_PATH,
      format: 'Letter',
      printBackground: true,
      margin: { top: '0.5in', right: '0.5in', bottom: '0.5in', left: '0.5in' },
    });
    console.log('Saved:', OUTPUT_PATH);
    console.log('You can add public/resume.pdf to the repo so the Download PDF button works.');
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
