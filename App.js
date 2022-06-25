import { StatusBar } from 'expo-status-bar'
import React, { Suspense, lazy } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

const ListPokemon = lazy(() => import('./src/ListPokemon'))
import useAxios from './src/hooks/useAxios'
const Loader = () => <Text>Loading..</Text>
const App = () => {
  const { data, loading, error } = useAxios('https://pokeapi.co/api/v2/pokemon')
  console.log(data)
  return (
    <Suspense fallback={<Loader />}>
      <View style={styles.container}>
        <StatusBar style="dark" />
        <View style={{ height: '20%' }} />
        <FlatList
          data={data?.results}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <ListPokemon pokemonName={item.name} pokemonDetails={item.url} />
          )}
          contentContainerStyle={styles.listItem}
          style={styles.list}
        />
      </View>
    </Suspense>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    width: '100%',
  },
  listItem: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App
