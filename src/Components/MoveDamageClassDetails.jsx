import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import useGetOne from '../hooks/useGetOne'
const MoveDamageClassDetails = ({ navigation, route }) => {
  const { moveDamageClassDetails } = route.params
  const { data, loading } = useGetOne(moveDamageClassDetails)
  if (loading) return <Text>Loading...</Text>

  return (
    <View>
      <Text>Class name: {data.name}</Text>
      <Text>
        Description:
        {data.descriptions
          .filter((item) => item.language.name === 'en')
          .map((item) => item.description)}
      </Text>
      <Text>Moves that have this class:</Text>
      <FlatList
        data={data.moves}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          return (
            <>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('MoveDetails', {
                    moveDetails: item.url,
                  })
                }
              >
                <Text>Move name: {item.name}</Text>
              </TouchableOpacity>
            </>
          )
        }}
      />
    </View>
  )
}

export default MoveDamageClassDetails

const styles = StyleSheet.create({})
