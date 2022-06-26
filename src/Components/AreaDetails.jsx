import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'
import useGetOne from '../hooks/useGetOne'
import capitalize from '../helpers/capitalize'
import formatString from '../helpers/formatString'
const AreaDetails = ({ navigation, route }) => {
  const { areaDetails } = route.params
  const { data, loading } = useGetOne(areaDetails)
  if (loading) return <Text>Loading...</Text>
  return (
    <View>
      <Text>Location name: {formatString(data.location.name)}</Text>
      <Text>Area name: {formatString(data.name)}</Text>
      <Text>Pokemons that can be encountered: </Text>
      <FlatList
        data={data.pokemon_encounters}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('PokemonDetails', {
                  url: item.pokemon.url,
                })
              }
            >
              <Text>{formatString(item.pokemon.name)}</Text>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

export default AreaDetails

const styles = StyleSheet.create({})
