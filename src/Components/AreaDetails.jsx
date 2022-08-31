import { useEffect } from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import formatString from '../helpers/formatString'
import useGetOne from '../hooks/useGetOne'
const AreaDetails = ({ navigation, route }) => {
  const { areaDetails } = route.params
  const { data, loading } = useGetOne(areaDetails)
  useEffect(() => {
    navigation.setOptions({ title: formatString(data.name) + ' Details' })
  }, [data])
  if (loading) return <Text>Loading...</Text>

  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('LocationDetails', {
            locationDetails: data.location.url,
          })
        }
      >
        <Text>Location name: {formatString(data.location.name)}</Text>
      </TouchableOpacity>
      <Text>Area name: {formatString(data.name)}</Text>
      <Text>Pokemons that can be encountered: </Text>
      <FlatList
        data={data.pokemon_encounters}
        renderItem={({ item }) => {
          return (
            <>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('PokemonDetails', {
                    url: item.pokemon.url,
                  })
                }
              >
                <Text>{formatString(item.pokemon.name)}</Text>
              </TouchableOpacity>
              {item.version_details.map((version) => (
                <>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('VersionDetails', {
                        versionDetails: version.version.url,
                      })
                    }
                  >
                    <Text>
                      Version name: {formatString(version.version.name)}
                    </Text>
                  </TouchableOpacity>
                  <Text>
                    Encounter chance: {version.encounter_details[0].chance}
                  </Text>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('MethodDetails', {
                        methodDetails: version.encounter_details[0].method.url,
                      })
                    }
                  >
                    <Text>
                      Method name:{' '}
                      {formatString(version.encounter_details[0].method.name)}
                    </Text>
                  </TouchableOpacity>
                </>
              ))}
            </>
          )
        }}
      />
    </View>
  )
}

export default AreaDetails

const styles = StyleSheet.create({})
