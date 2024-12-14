export const formattedDatetime = (datetime: Date) => {
  if (!datetime) return ''
  const date = new Date(datetime)
  return `${date.toLocaleDateString()}, ${date.getHours()}:${date.getMinutes()}`
}
