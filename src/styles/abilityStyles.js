import { StyleSheet } from 'react-native'
import { Screen } from '../constants/constants'
import { generics } from './genericStyles'
const styles = StyleSheet.create({
  item: {
    ...generics.button,
    width: Screen.width * 0.9,
    marginVertical: 10,
  },
  list: {
    top: Screen.height * 0.1,
    width: Screen.width,
    height: Screen.height,
    alignContent: 'center',
  },
  listItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: 30,
  },
  abilityName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
})

export default styles
