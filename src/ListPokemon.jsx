import { Alert, StyleSheet, Text, TouchableOpacity } from 'react-native'

const ListPokemon = ({ pokemonName, pokemonDetails }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        Alert.alert(`You selected ${pokemonName}`)
      }}
    >
      <Text style={styles.text}>{pokemonName}</Text>
    </TouchableOpacity>
  )
}

export default ListPokemon

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#fff',
  },

  text: {
    width: '100%',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    fontSize: 18,
    fontWeight: 'bold',
  },
})
