import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useGetOne from '../hooks/useGetOne'
const GenerationDetails = ({ navigation, route }) => {
  const { generationDetails } = route.params
  const { data, loading } = useGetOne(generationDetails)
  if (loading) return <Text>Loading...</Text>
  return (
    <View>
      <Text>GenerationDetails</Text>
    </View>
  )
}

export default GenerationDetails

const styles = StyleSheet.create({})
