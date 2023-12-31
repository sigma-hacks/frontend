export const dmYFormat = (date: string | Date) => {
  if (!(date instanceof Date)) {
    date = new Date(date)
  }

  // Get variants with zero leading
  const day = `0${date.getDate()}`.slice(-2)
  const month = `0${date.getMonth()}`.slice(-2)

  return `${day}.${month}.${date.getFullYear()}`
}

export const hiFormat = (date: string | Date) => {
  if (!(date instanceof Date)) {
    date = new Date(date)
  }

  const hours = `0${date.getHours()}`.slice(-2)
  const minutes = `0${date.getMinutes()}`.slice(-2)

  return `${hours}:${minutes}`
}
