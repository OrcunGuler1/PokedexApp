import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useGetOne from '../hooks/useGetOne'
const PokeathlonStatDetails = ({ navigation, route }) => {
  const { pokeathlonStatDetails } = route.params
  const { data, loading } = useGetOne(pokeathlonStatDetails)
  if (loading) return <Text>Loading...</Text>
  return (
    <View>
      <Text>PokeathlonStatDetails</Text>
    </View>
  )
}

export default PokeathlonStatDetails

const styles = StyleSheet.create({})
