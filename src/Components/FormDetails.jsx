import { useEffect } from 'react'
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import formatString from '../helpers/capitalize'
import useGetOne from '../hooks/useGetOne'

const FormDetails = ({ navigation, route }) => {
  const { formDetails } = route.params
  const { data, loading } = useGetOne(formDetails)
  useEffect(() => {
    if (loading) return
    data.form_name
      ? navigation.setOptions({
          title: formatString(data.form_name) + ' Form details',
        })
      : navigation.setOptions({
          title: formatString(data.name) + ' Form details',
        })
  }, [data])
  if (loading) return <Text>Loading...</Text>
  return (
    <View>
      <Image
        source={{ uri: data?.sprites?.front_default }}
        style={{ width: 50, height: 50 }}
      />
      <Text>
        Form name:{' '}
        {data.form_name
          ? formatString(data.form_name)
          : formatString(data.name)}
      </Text>
      <Text>Default form: {data?.is_default ? 'Yes' : 'No'}</Text>
      <Text>
        Encounterd only in battle: {data?.is_battle_only ? 'Yes' : 'No'}
      </Text>
      <Text>Other Names: </Text>
      {data.names.length > 0 ? (
        <FlatList
          data={data?.names}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => <Text>{formatString(item.name)}</Text>}
        />
      ) : (
        <Text>No other names</Text>
      )}
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('PokemonDetails', { url: data.pokemon.url })
        }
      >
        <Text>Pokemon details: {data.pokemon.name}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default FormDetails

const styles = StyleSheet.create({})
