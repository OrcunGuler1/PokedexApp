import { useState } from 'react'
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'
import { Screen } from '../constants/constants'
import formatString from '../helpers/capitalize.js'
import useAxios from '../hooks/useAxios.js'
const ListPokemon = ({ navigation }) => {
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const { list, next } = useAxios(url)
  return (
    <SafeAreaView>
      <FlatList
        data={list}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate('PokemonDetails', { url: item.url })
            }
          >
            <Text style={styles.text}>{formatString(item.name)}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listItem}
        style={styles.list}
        onEndReached={() => {
          setUrl(next)
        }}
      />
    </SafeAreaView>
  )
}

export default ListPokemon

const styles = StyleSheet.create({
  button: {
    width: Screen.width,
    backgroundColor: '#fff',
    padding: 10,
    alignContent: 'center',
  },

  text: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  list: {
    width: Screen.width,
  },
  listItem: {
    width: Screen.width,
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
})
