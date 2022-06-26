import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useGetOne from '../hooks/useGetOne'
const MoveDamageClassDetails = ({ navigation, route }) => {
  const { moveDamageClassDetails } = route.params
  const { data, loading } = useGetOne(moveDamageClassDetails)
  if (loading) return <Text>Loading...</Text>
  console.log(moveDamageClassDetails)
  return (
    <View>
      <Text>MoveDamageClassDetails</Text>
    </View>
  )
}

export default MoveDamageClassDetails

const styles = StyleSheet.create({})
