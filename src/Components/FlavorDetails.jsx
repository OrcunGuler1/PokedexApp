import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useGetOne from '../hooks/useGetOne'
const FlavorDetails = ({ navigation, route }) => {
  const { flavorDetails } = route.params
  const { data, loading } = useGetOne(flavorDetails)
  if (loading) return <Text>Loading...</Text>
  return (
    <View>
      <Text>FlavorDetails</Text>
    </View>
  )
}

export default FlavorDetails

const styles = StyleSheet.create({})
