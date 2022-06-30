import { useCallback, useEffect } from 'react'
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import formatString from '../helpers/formatString'
import useGetOne from '../hooks/useGetOne'
const PokemonDetails = ({ navigation, route }) => {
  const { url } = route.params
  const { data, loading } = useGetOne(url)
  const setTitle = useCallback(() => {
    navigation.setOptions({
      title: formatString(data.name) + ' Details',
    })
  }, [navigation, data.name])
  useEffect(() => {
    setTitle()
  }, [setTitle])
  if (loading) return <Text>Loading...</Text>
  return (
    <View>
      <Image
        source={{ uri: data?.sprites?.front_default }}
        style={{ width: 50, height: 50 }}
      />
      <TouchableOpacity
        name="abilities"
        onPress={() =>
          navigation.navigate('PokemonAbilities', { abilities: data.abilities })
        }
      >
        <Text>Ablities</Text>
      </TouchableOpacity>
      <Text>Base Experience: {data.base_experience}</Text>
      <Text>Height: {data.height}</Text>
      <Text>Weight: {data.weight}</Text>
      <Text>Forms: </Text>
      <FlatList
        data={data?.forms}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            name={item.name}
            onPress={() =>
              navigation.navigate('FormDetails', {
                formDetails: item.url,
              })
            }
          >
            <Text>{formatString(item.name)}</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        name="encounter"
        onPress={() =>
          navigation.navigate('Encounters', {
            encounter: data.location_area_encounters,
          })
        }
      >
        <Text>Encounters</Text>
      </TouchableOpacity>
      <FlatList
        data={data?.stats}
        keyExtractor={(item) => item.stat.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('StatDetails', { statDetails: item.stat.url })
            }
          >
            <Text>
              {formatString(item.stat.name)}: {item.base_stat}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default PokemonDetails

const styles = StyleSheet.create({})
