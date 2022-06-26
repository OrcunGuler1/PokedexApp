import capitalize from './capitalize'

const formatString = (string) => {
  if (typeof string !== 'string') return ''
  return string.split('-').length > 1
    ? string
        .split('-')
        .map((item) => capitalize(item))
        .join(' ')
    : capitalize(string)
}

export default formatString
