import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useGetOne from '../hooks/useGetOne'
const SuperContestEffectDetails = () => {
  const { superContestEffectDetails } = route.params
  const { data, loading } = useGetOne(superContestEffectDetails)
  return (
    <View>
      <Text>SuperContestEffectDetails</Text>
    </View>
  )
}

export default SuperContestEffectDetails

const styles = StyleSheet.create({})
