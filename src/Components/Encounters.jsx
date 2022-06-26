import { StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import useGetOne from '../hooks/useGetOne'
import capitalize from '../helpers/capitalize'
import formatString from '../helpers/formatString'
const Encounters = ({ navigation, route }) => {
  const { encounter } = route.params
  const { data, loading } = useGetOne(encounter)

  if (loading) return <Text>Loading...</Text>
  if (data.length === 0) return <Text>No encounters</Text>
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('AreaDetails', {
                areaDetails: item.location_area.url,
              })
            }
          >
            <Text>Area name: {formatString(item.location_area.name)}</Text>
          </TouchableOpacity>
        )
      }}
    />
  )
}

export default Encounters

const styles = StyleSheet.create({})
