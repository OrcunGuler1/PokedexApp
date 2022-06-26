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
const NatureDetails = ({ navigation, route }) => {
  const { natureDetails } = route.params
  const { data, loading } = useGetOne(natureDetails)
  if (loading) return <Text>Loading...</Text>
  console.log(natureDetails)
  return (
    <View>
      <Text>Name: {formatString(data.name)} </Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('StatDetails', {
            statDetails: data.increased_stat.url,
          })
        }
      >
        <Text>Increases stat: {formatString(data.increased_stat.name)}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('StatDetails', {
            statDetails: data.decreased_stat.url,
          })
        }
      >
        <Text>Decreases stat: {formatString(data.decreased_stat.name)}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('FlavorDetails', {
            flavorDetails: data.likes_flavor.url,
          })
        }
      >
        <Text>Likes flavor: {formatString(data.likes_flavor.name)}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('FlavorDetails', {
            flavorDetails: data.hates_flavor.url,
          })
        }
      >
        <Text>Hates flavor: {formatString(data.hates_flavor.name)}</Text>
      </TouchableOpacity>
      <FlatList
        data={data.move_battle_style_preferences}
        keyExtractor={(item) => item.move_battle_style.name}
        renderItem={({ item }) => {
          return (
            <>
              <Text>
                Move battle style name:{' '}
                {formatString(item.move_battle_style.name)}
              </Text>
              <Text>High Health preference: {item.high_hp_preference}</Text>
              <Text>Low Health preference: {item.low_hp_preference}</Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('MoveBattleStyleDetails', {
                    moveBattleStyleDetails: item.move_battle_style.url,
                  })
                }
              >
                <Text>Go to details</Text>
              </TouchableOpacity>
            </>
          )
        }}
      />
      <Text>Pokeathlon stat changes: </Text>
      <FlatList
        data={data.pokeathlon_stat_changes}
        keyExtractor={(item) => item.pokeathlon_stat.name}
        renderItem={({ item }) => {
          return (
            <>
              <Text>
                Pokeathlon stat name: {formatString(item.pokeathlon_stat.name)}
              </Text>

              <Text>Max change: {item.max_change}</Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('PokeathlonStatDetails', {
                    pokeathlonStatDetails: item.pokeathlon_stat.url,
                  })
                }
              >
                <Text>Go to details</Text>
              </TouchableOpacity>
            </>
          )
        }}
      />
    </View>
  )
}

export default NatureDetails

const styles = StyleSheet.create({})
