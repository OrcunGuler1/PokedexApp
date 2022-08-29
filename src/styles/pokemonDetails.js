import { StyleSheet } from 'react-native'
import { generics } from './genericStyles'
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pokemonImage: {
    backgroundColor: 'grey',
    width: '100%',
    height: '20%',
    resizeMode: 'contain',
  },
  pokemonName: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  pokemonAbilitesButton: {
    ...generics.button,
  },
  pokemonDetails: {
    textAlign: 'center',
    width: '100%',
    fontSize: 20,
    borderTopColor: '#ccc',
    borderTopWidth: 1,
  },
  pokemonStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  pokemonStat: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
})
