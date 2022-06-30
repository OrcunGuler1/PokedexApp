import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native'
import React, { useEffect } from 'react'
import useGetOne from '../hooks/useGetOne'
import formatString from '../helpers/formatString'
const PokedexDetails = ({ navigation, route }) => {
  const { pokedexDetails } = route.params
  const { data, loading } = useGetOne(pokedexDetails)
  useEffect(() => {
    if (loading) {
      navigation.setOptions({ title: '' })
      return
    }
    navigation.setOptions({
      title: formatString(data.name) + ' Pokedex Details',
    })
  }, [data, loading, navigation])
  if (loading) return <Text>Loading...</Text>

  return (
    <View>
      <Text>Pokedex name: {formatString(data.name)}</Text>
      <Text>
        Pokedex description:{' '}
        {formatString(
          data.descriptions.filter((item) => item.language.name === 'en')[0]
            .description,
        )}
      </Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('RegionDetails', {
            regionDetails: data.region.url,
          })
        }
      >
        <Text>Region: {formatString(data.region.name)}</Text>
      </TouchableOpacity>
      <Text>Available Pokemon</Text>
      <FlatList
        data={data.pokemon_entries}
        keyExtractor={(item) => item.entry_number}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('PokemonDetails', {
                  url: item.pokemon_species.url,
                })
              }
            >
              <Text>
                Pokemon name: {formatString(item.pokemon_species.name)}
              </Text>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

export default PokedexDetails

const styles = StyleSheet.create({})
