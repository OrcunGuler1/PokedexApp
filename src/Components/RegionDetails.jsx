import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import useGetOne from '../hooks/useGetOne'
import { useEffect } from 'react'
import formatString from '../helpers/formatString'
const RegionDetails = ({ navigation, route }) => {
  const { regionDetails } = route.params
  const { data, loading } = useGetOne(regionDetails)
  useEffect(() => {
    if (loading) return
    navigation.setOptions({
      title: formatString(data.name) + ' Details',
    })
  }, [data])
  if (loading) return <Text>Loading...</Text>

  return (
    <View>
      <Text>Region Name: {formatString(data.name)}</Text>
      <Text>Available Pokedexes</Text>
      <FlatList
        data={data.pokedexes}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('PokedexDetails', {
                  pokedexDetails: item.url,
                })
              }
            >
              <Text>Pokedex name: {formatString(item.name)}</Text>
            </TouchableOpacity>
          )
        }}
      />
      <Text>Locations in this region </Text>
      <FlatList
        data={data.locations}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('LocationDetails', {
                  locationDetails: item.url,
                })
              }
            >
              <Text>Location name: {formatString(item.name)}</Text>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

export default RegionDetails

const styles = StyleSheet.create({})
