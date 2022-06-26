import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'
import useGetOne from '../hooks/useGetOne'
import formatString from '../helpers/formatString'
const MoveDetails = ({ navigation, route }) => {
  const { moveDetails } = route.params
  const { data, loading } = useGetOne(moveDetails)
  if (loading) return <Text>Loading...</Text>
  console.log(moveDetails)
  return (
    <View>
      <Text>Move name: {formatString(data.name)}</Text>
      <Text>Move Accuracy: {data.accuracy}</Text>
      {data.contest_combos ? (
        <Text>Contest Combos: {data.contest_combos.length}</Text>
      ) : (
        <Text>Contest Combos: 0</Text>
      )}
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ContestEffect', {
            consestEffect: data.contest_effect.url,
          })
        }
      >
        <Text>Contest Effect</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ContestType', {
            contestType: data.contest_type.url,
          })
        }
      >
        <Text>Contest type: {formatString(data.contest_type.name)}</Text>
      </TouchableOpacity>
      <Text>Damage class: {formatString(data.damage_class.name)}</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('MoveDamageClassDetails', {
            moveDamageClassDetails: data.damage_class.url,
          })
        }
      >
        <Text>Go to class details</Text>
      </TouchableOpacity>
      <Text>Chance to apply effect: {data.effect_chance}%</Text>
      {data.effect_changes.length > 0 ? (
        <>
          <Text>Effect changes: </Text>
          <FlatList
            data={data.effect_changes}
            keyExtractor={(item) => item.version_group.name}
            renderItem={({ item }) => {
              return <Text>{item.version_group.name}</Text>
            }}
          />
        </>
      ) : (
        <Text>Effect changes: No effect changes</Text>
      )}
      <Text>Power: {data.power}</Text>

      {data.effect_entries.length > 0 ? (
        <>
          <Text>Effect entries: </Text>
          <FlatList
            data={data.effect_entries}
            keyExtractor={(item) => item.effect}
            renderItem={({ item }) => {
              return (
                <Text>
                  {item.effect
                    .replace('effect_chance', data.effect_chance)
                    .replace('$', '')}
                </Text>
              )
            }}
          />
        </>
      ) : (
        <Text>Effect entries: No effect entries</Text>
      )}
      <Text>Generation: {formatString(data.generation.name)}</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('GenerationDetails', {
            generationDetails: data.generation.url,
          })
        }
      >
        <Text>Generation details</Text>
      </TouchableOpacity>
      <Text>Modifies stats:</Text>
      <FlatList
        data={data.stat_changes}
        keyExtractor={(item) => item.stat.name}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('StatDetails', {
                  statDetails: item.stat.url,
                })
              }
            >
              <Text>
                {item.stat.name} by: {item.change}
              </Text>
            </TouchableOpacity>
          )
        }}
      />
      <Text>Targets {formatString(data.target.name)}</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('TargetingDetails', {
            targetingDetails: data.target.url,
          })
        }
      >
        <Text>Targeting details</Text>
      </TouchableOpacity>
      <Text>Attack type: {formatString(data.type.name)}</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('TypeDetails', {
            typeDetails: data.type.url,
          })
        }
      >
        <Text> Type details</Text>
      </TouchableOpacity>
      <Text>Other pokemons that can learn this move: </Text>
      <FlatList
        data={data.learned_by_pokemon}
        keyExtractor={(item) => item.name}
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
  )
}

export default MoveDetails

const styles = StyleSheet.create({})
