import { useEffect } from 'react'
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import formatString from '../helpers/formatString'
import useGetOne from '../hooks/useGetOne'
import formatGeneration from '../helpers/formatGeneration'
const GenerationDetails = ({ navigation, route }) => {
  const { generationDetails } = route.params
  const { data, loading } = useGetOne(generationDetails)

  useEffect(() => {
    if (loading) return
    navigation.setOptions({
      title: formatGeneration(data.name) + '  Details',
    })
  }, [data])
  if (loading) return <Text>Loading...</Text>

  return (
    <ScrollView>
      <Text>Generation Name: {formatGeneration(data.name)}</Text>
      <Text>Main region: {formatString(data.main_region.name)}</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('RegionDetails', {
            regionDetails: data.main_region.url,
          })
        }
      >
        <Text>Region details</Text>
      </TouchableOpacity>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <View>
          <Text>Moves from this generation:</Text>
          <FlatList
            data={data.moves}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('MoveDetails', {
                      moveDetails: item.url,
                    })
                  }
                >
                  <Text>{formatString(item.name)}</Text>
                </TouchableOpacity>
              )
            }}
          />
        </View>
        <View>
          <Text>Pokemon species from this generation</Text>
          <FlatList
            data={data.pokemon_species}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('PokemonDetails', {
                      url: item.url,
                    })
                  }
                >
                  <Text>{formatString(item.name)}</Text>
                </TouchableOpacity>
              )
            }}
          />
        </View>
        <View>
          <Text>Pokemon types from this generation</Text>
          <FlatList
            data={data.types}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('TypeDetails', {
                      typeDetails: item.url,
                    })
                  }
                >
                  <Text>{formatString(item.name)}</Text>
                </TouchableOpacity>
              )
            }}
          />
        </View>
      </View>
    </ScrollView>
  )
}

export default GenerationDetails

const styles = StyleSheet.create({})
