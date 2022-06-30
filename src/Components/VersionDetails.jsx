import { StyleSheet, Text, View } from 'react-native'
import useGetOne from '../hooks/useGetOne'
const VersionDetails = ({ navigation, route }) => {
  const { versionDetails } = route.params
  const { data, loading } = useGetOne(versionDetails)
  if (loading) return <Text>Loading...</Text>
  return (
    <View>
      <Text>VersionDetails</Text>
    </View>
  )
}

export default VersionDetails

const styles = StyleSheet.create({})
