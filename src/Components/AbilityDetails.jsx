import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import useGetOne from '../hooks/useGetOne'
import formatString from '../helpers/formatString'
const AbilityDetails = ({ navigation, route }) => {
  const { url } = route.params
  const { data, loading } = useGetOne(url)
  const [abilityDetail, setAbilityDetail] = useState(
    data && !loading
      ? [...data?.effect_entries?.filter((item) => item.language.name === 'en')]
      : [],
  )
  if (loading) {
    return <Text>Loading...</Text>
  }
  return (
    <View>
      <Text>{abilityDetail.short_effect}</Text>
      <Text>{formatString(data.generation.name)}</Text>
      <Text>Ability Name: {formatString(data.name)}</Text>
      <Text>From the main series: {data.is_main_series ? 'Yes' : 'No'}</Text>
      <Text>Other Pokemon that uses this ability:</Text>
      {data.pokemon.map((item) => (
        <TouchableOpacity
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
