export const isExpiredTime = (endTime: number) => {
  if (endTime === 0) {
    return null
  }
  const currentData = new Date().getTime()
  return currentData > new Date(Number(endTime + '000')).getTime()
}
