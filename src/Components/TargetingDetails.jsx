import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useGetOne from '../hooks/useGetOne'
const TargetingDetails = ({ navigation, route }) => {
  const { targetingDetails } = route.params
  const { data, loading } = useGetOne(targetingDetails)
  if (loading) return <Text>Loading...</Text>
  return (
    <View>
      <Text>TargetingDetails</Text>
    </View>
  )
}

export default TargetingDetails

const styles = StyleSheet.create({})
