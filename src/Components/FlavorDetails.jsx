import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import formatString from '../helpers/formatString'
import useGetOne from '../hooks/useGetOne'
const FlavorDetails = ({ navigation, route }) => {
  const { flavorDetails } = route.params
  const { data, loading } = useGetOne(flavorDetails)
  if (loading) return <Text>Loading...</Text>
  console.log(flavorDetails)
  return (
    <View>
      <Text>Flavor name: {formatString(data.name)}</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ContestTypeDetails', {
            contestTypeDetails: data.contest_type.url,
          })
        }
      >
        <Text>Contest type: {formatString(data.contest_type.name)}</Text>
      </TouchableOpacity>
      <Text>Berries that can have this flavor:</Text>
      <FlatList
        data={data.berries}
        keyExtractor={(item) => item.berry.name}
        renderItem={({ item }) => {
          return (
            <>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('BerryDetails', {
                    berryDetails: item.berry.url,
                  })
                }
              >
                <Text>Berry name: {formatString(item.berry.name)}</Text>
              </TouchableOpacity>
              <Text>Potency: {item.potency}</Text>
            </>
          )
        }}
      ></FlatList>
    </View>
  )
}

export default FlavorDetails

const styles = StyleSheet.create({})
