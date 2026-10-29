// The live door sign in the "What every site comes with" demo. Sample hours (Mon–Sat 9 AM–6 PM, Sunday closed),
// worked out in Pacific time so it is right wherever the page is viewed.
const OPEN = 540
const CLOSE = 1080
const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const isOpenDay = (d) => d !== 0

export function sampleSign(now = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Los_Angeles', weekday: 'short', hour: 'numeric', minute: 'numeric', hourCycle: 'h23' }).formatToParts(now)
  const get = (t) => parts.find((p) => p.type === t)?.value
  const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'))
  const mins = Number(get('hour')) * 60 + Number(get('minute'))

  if (isOpenDay(day) && mins >= OPEN && mins < CLOSE) {
    return { word: mins >= CLOSE - 60 ? 'Closing soon' : 'Open', time: 'until 6 PM', open: true }
  }
  if (isOpenDay(day) && mins < OPEN) return { word: 'Closed', time: 'opens at 9 AM', open: false }
  let next = (day + 1) % 7
  while (!isOpenDay(next)) next = (next + 1) % 7
  return { word: 'Closed', time: `opens 9 AM ${next === (day + 1) % 7 ? 'tomorrow' : DAYS[next]}`, open: false }
}
