import { page } from 'setup'

export function getValue (index: number) {
  const selector = `#panel-1727861 > div.panel-content > table > tbody > tr:nth-child(${index}) > td.r.nowrap`
  return page.$eval(selector, (el) => parseFloat((el as HTMLElement).innerText.replace(',', '.')))
}
