import { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import formatString from '../helpers/formatString'
import useGetOne from '../hooks/useGetOne'
import formatGeneration from '../helpers/formatGeneration'
const AbilityDetails = ({ navigation, route }) => {
  const { url } = route.params
  const { data, loading } = useGetOne(url)
  const [abilityDetail, setAbilityDetail] = useState(
    data && !loading
      ? [...data?.effect_entries?.filter((item) => item.language.name === 'en')]
      : [],
  )
  useEffect(() => {
    navigation.setOptions({ title: formatString(data.name) + ' Details' })
  }, [data])
  if (loading) {
    return <Text>Loading...</Text>
  }
  return (
    <View>
      <Text>{abilityDetail.short_effect}</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('GenerationDetails', {
            generationDetails: data.generation.url,
          })
        }
      >
        <Text>{formatGeneration(data.generation.name)}</Text>
      </TouchableOpacity>
      <Text>Ability Name: {formatString(data.name)}</Text>
      <Text>From the main series: {data.is_main_series ? 'Yes' : 'No'}</Text>
      <Text>Other Pokemon that uses this ability:</Text>
      {data.pokemon.map((item) => (
        <TouchableOpacity
          key={item.pokemon.name}
          onPress={() =>
            navigation.navigate('PokemonDetails', { url: item.pokemon.url })
          }
        >
          <Text key={item.pokemon.name}>{formatString(item.pokemon.name)}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default AbilityDetails

const styles = StyleSheet.create({})
