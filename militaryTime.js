const toMilitary = time => {
  let suffix = time.slice(-2)
  let hr = Number(time.split(':')[0])
  let min = time.split(':')[1].slice(0,2)
  return suffix !== 'am' && suffix !== 'pm' ? time : 
  hr === 12 ? 
  suffix === 'am' ? `00:${min}`:`12:${min}`:
  suffix === 'am' ? `0${hr}:${min}`:`${hr+12}:${min}`
}