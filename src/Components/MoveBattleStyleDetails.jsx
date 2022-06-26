import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useGetOne from '../hooks/useGetOne'
const MoveBattleStyleDetails = ({ navigation, route }) => {
  const { moveBattleStyleDetails } = route.params
  const { data, loading } = useGetOne(moveBattleStyleDetails)
  if (loading) return <Text>Loading...</Text>
  return (
    <View>
      <Text>MoveBattleStyleDetails</Text>
    </View>
  )
}

export default MoveBattleStyleDetails

const styles = StyleSheet.create({})
