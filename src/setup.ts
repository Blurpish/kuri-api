import puppeteer from 'puppeteer'

const browser = await puppeteer.launch({ headless: true })
export const page = await browser.newPage()

await page.goto('https://runalyze.com/')
await page.click('#headline > div > div > div > div > ul.d-none.d-sm-block > li:nth-child(1) > a')
await page.type('#username', process.env['USERNAME'] as string)
await page.type('#password', process.env['PASSWORD'] as string)
await page.keyboard.press('Enter')
await page.waitForNavigation()
