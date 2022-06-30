import { useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import formatString from '../helpers/formatString'
import useGetOne from '../hooks/useGetOne'
const LocationDetails = ({ navigation, route }) => {
  const { locationDetails } = route.params
  const { data, loading } = useGetOne(locationDetails)
  useEffect(() => {
    if (loading) return
    navigation.setOptions({
      title: formatString(data.name) + ' Details',
    })
  }, [data])
  if (loading) return <Text>Loading...</Text>
  console.log(locationDetails)
  return (
    <View>
      <Text>Location name: {formatString(data.name)}</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('RegionDetails', {
            regionDetails: data.region.url,
          })
        }
      >
        <Text>Region: {formatString(data.region.name)}</Text>
      </TouchableOpacity>
      <Text>Areas in this location </Text>
      <FlatList
        data={data.areas}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('AreaDetails', {
                  areaDetails: item.url,
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

export default LocationDetails

const styles = StyleSheet.create({})
