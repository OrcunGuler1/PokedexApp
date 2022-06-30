import formatString from './formatString'
import romanToInt from './romanToInt'
const formatGeneration = (string) => {
  if (typeof string === 'undefined') return ''
  const res =
    formatString(string).split(' ')[0] +
    ' ' +
    romanToInt(formatString(string).split(' ')[1].toUpperCase())
  return res.toString()
}

export default formatGeneration
