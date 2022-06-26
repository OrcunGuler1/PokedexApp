import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useGetOne from '../hooks/useGetOne'
const TypeDetails = ({ navigation, route }) => {
  const { typeDetails } = route.params
  const { data, loading } = useGetOne(typeDetails)
  if (loading) return <Text>Loading...</Text>
  return (
    <View>
      <Text>TypeDetails</Text>
    </View>
  )
}

export default TypeDetails

const styles = StyleSheet.create({})
