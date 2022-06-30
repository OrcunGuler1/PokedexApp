import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import formatString from '../helpers/formatString'
import useGetOne from '../hooks/useGetOne'
const StatDetails = ({ navigation, route }) => {
  const { statDetails } = route.params
  const { data, loading } = useGetOne(statDetails)
  if (loading) return <Text>Loading...</Text>
  return (
    <View>
      <Text>Move name: {formatString(data.name)}</Text>
      <Text>Battle only move: {data.is_battle_only ? 'Yes' : 'No'}</Text>
      {data.move_damage_class ? (
        <>
          <Text>
            Move damage class name: {formatString(data.move_damage_class.name)}
          </Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('MoveDamageClassDetails', {
                moveDamageClassDetails: data.move_damage_class.url,
              })
            }
          >
            <Text>Go to details</Text>
          </TouchableOpacity>
        </>
      ) : null}
      <View style={styles.listContainer}>
        <View>
          <Text>Move weak against: </Text>
          <FlatList
            data={data.affecting_moves.decrease}
            keyExtractor={(item) => item.move.name}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('MoveDetails', {
                      moveDetails: item.move.url,
                    })
                  }
                >
                  <Text>Move name: {formatString(item.move.name)}</Text>
                  <Text> Multiplier: {item.change}</Text>
                </TouchableOpacity>
              )
            }}
          />
        </View>
        <View>
          <Text>Move strong against: </Text>
          <FlatList
            data={data.affecting_moves.increase}
            keyExtractor={(item) => item.move.name}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('MoveDetails', {
                      moveDetails: item.move.url,
                    })
                  }
                >
                  <Text>{formatString(item.move.name)}</Text>
                  <Text> Multiplier: {item.change}</Text>
                </TouchableOpacity>
              )
            }}
          />
        </View>
      </View>
      <View style={styles.listContainer}>
        <View>
          <Text>Move weak agains nature: </Text>
          <FlatList
            data={data.affecting_natures.decrease}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('NatureDetails', {
                      natureDetails: item.url,
                    })
                  }
                >
                  <Text>Nature name: {formatString(item.name)}</Text>
                </TouchableOpacity>
              )
            }}
          />
        </View>
        <View>
          <Text>Move strong against nature: </Text>
          <FlatList
            data={data.affecting_natures.increase}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('NatureDetails', {
                      natureDetails: item.url,
                    })
                  }
                >
                  <Text>Nature name: {formatString(item.name)}</Text>
                </TouchableOpacity>
              )
            }}
          />
        </View>
      </View>
    </View>
  )
}

export default StatDetails

const styles = StyleSheet.create({
  listContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
})
