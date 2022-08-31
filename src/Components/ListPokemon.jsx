import { useState } from 'react'
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
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
        keyExtractor={item => item.url}
        ListHeaderComponent={() => {
          return (
            <>
              <TextInput />
              <Text style={styles.header}>List of Pokemon</Text>
            </>
          )
        }}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="flex flex-col w-100 p-4 items-center justify-center border-2 border-sky-500 rounded my-2"
            onPress={() =>
              navigation.navigate('PokemonDetails', { url: item.url })
            }
          >
            <Text className="text-black ">{formatString(item.name)}</Text>
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
