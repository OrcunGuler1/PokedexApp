import { StyleSheet, Text, View } from 'react-native'
import useGetOne from '../hooks/useGetOne'
const MethodDetails = ({ avigation, route }) => {
  const { methodDetails } = route.params
  const { data, loading } = useGetOne(methodDetails)
  if (loading) return <Text>Loading...</Text>
  return (
    <View>
      <Text>MethodDetails</Text>
    </View>
  )
}

export default MethodDetails

const styles = StyleSheet.create({})
