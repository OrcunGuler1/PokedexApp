export const randomColor = () => {
  const colors = ['#D50052', '#A03851', '#9B4C50', '#A3552E', '#AA5A00']
  const rndNum = Math.floor(Math.random() * colors.length)
  return colors[rndNum]
}
