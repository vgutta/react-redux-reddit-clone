// Utilities shared accross the application

export function capitalize(word) {
  return word.slice(0, 1).toUpperCase() + word.slice(1)
}

export function formatDate(ts, fullDate) {
  const date = new Date(ts)
  const baseDate = date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear()
  const hours = '0' + date.getHours()
  const minutes = '0' + date.getMinutes()
  const hoursDate = hours.substr(-2) + ':' + minutes.substr(-2)
  return  fullDate ? hoursDate + ' ' + baseDate : baseDate
}

// this is probably way more complex than it needs to be
export function shouldFetchListItem(state, item, modifier) {
  var len
  if (modifier) {
    if (Object.keys(state[item]).length === 0) {
      // return true if object is empty
      return true
    } else {
      // look for property in object
      len = state[item][modifier].length
    }
  } else {
    len = state[item].length
  }
  // final check if not previously caught
  if (len > 0) {
    return false
  } else {
    return true
  }
}
