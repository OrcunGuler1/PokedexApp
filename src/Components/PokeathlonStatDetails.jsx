import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import formatString from '../helpers/formatString'
import useGetOne from '../hooks/useGetOne'
const PokeathlonStatDetails = ({ navigation, route }) => {
  const { pokeathlonStatDetails } = route.params
  const { data, loading } = useGetOne(pokeathlonStatDetails)
  if (loading) return <Text>Loading...</Text>
  console.log(pokeathlonStatDetails)
  const {
    affecting_natures: { increase, decrease },
  } = data
  return (
    <View>
      <Text>Stat name: {formatString(data.name)}</Text>
      <Text>Stat increases natures:</Text>
      <FlatList
        data={increase}
        keyExtractor={(item) => item.nature.name}
        renderItem={({ item }) => {
          return (
            <>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('NatureDetails', {
                    natureDetails: item.nature.url,
                  })
                }
              >
                <Text>Nature name: {formatString(item.nature.name)}</Text>
              </TouchableOpacity>
              <Text>Change: {item.max_change}</Text>
            </>
          )
        }}
      />
      <Text>Stat decreases natures:</Text>
      <FlatList
        data={decrease}
        keyExtractor={(item) => item.nature.name}
        renderItem={({ item }) => {
          return (
            <>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('NatureDetails', {
                    natureDetails: item.nature.url,
                  })
                }
              >
                <Text>Nature name: {formatString(item.nature.name)}</Text>
              </TouchableOpacity>
              <Text>Change: {item.max_change}</Text>
            </>
          )
        }}
      />
    </View>
  )
}

export default PokeathlonStatDetails

const styles = StyleSheet.create({})
