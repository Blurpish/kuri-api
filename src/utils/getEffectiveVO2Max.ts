import { page } from 'setup'

export async function getEffectiveVO2Max () {
  await page.click('#panel-1727861 > div.panel-content > table > tbody > tr:nth-child(1) > td:nth-child(2) > strong > a')
  await page.waitForNetworkIdle()

  return await page.$eval('#performance-status-trend-table', (el) => {
    const data = []
    for (const row of el.children) {
      if (!row.classList.length) continue

      const month = (row.children[0] as HTMLElement).innerText
      const year = [...row.classList].find((className) => className.includes('details-'))!.replace('details-', '')
      const average = parseFloat((row.children[3] as HTMLElement).innerText)

      data.push({ date: `${month} ${year}`, average })
    }
    return data
  })
}
