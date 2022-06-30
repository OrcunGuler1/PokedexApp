import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native'
import formatString from '../helpers/formatString'
import useGetOne from '../hooks/useGetOne'
const Encounters = ({ navigation, route }) => {
  const { encounter } = route.params
  const { data, loading } = useGetOne(encounter)

  if (loading) return <Text>Loading...</Text>

  if (data.length === 0) return <Text>No encounters</Text>

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => {
        return (
          <>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('AreaDetails', {
                  areaDetails: item.location_area.url,
                })
              }
            >
              <Text>Area name: {formatString(item.location_area.name)}</Text>
            </TouchableOpacity>
            {item.version_details.map((version) => {
              return (
                <>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('VersionDetails', {
                        versionDetails: version.version.url,
                      })
                    }
                  >
                    <Text>
                      Version name: {formatString(version.version.name)}
                    </Text>
                  </TouchableOpacity>
                  <Text>
                    Encounter chance: {version.encounter_details[0].chance}
                  </Text>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('MethodDetails', {
                        methodDetails: version.encounter_details[0].method.url,
                      })
                    }
                  >
                    <Text>
                      Method name:{' '}
                      {formatString(version.encounter_details[0].method.name)}
                    </Text>
                  </TouchableOpacity>
                </>
              )
            })}
          </>
        )
      }}
    />
  )
}

export default Encounters

const styles = StyleSheet.create({})
