import { useCallback, useEffect } from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import Divider from '../HelperComponents/Divider'
import formatString from '../helpers/formatString'
import { randomColor } from '../helpers/randomColor'
import useGetOne from '../hooks/useGetOne'
import { styles } from '../styles/pokemonDetails'
const PokemonDetails = ({ navigation, route }) => {
  const { url } = route.params
  const { data, loading } = useGetOne(url)
  const setTitle = useCallback(() => {
    navigation.setOptions({
      title: formatString(data.name) + ' Details',
    })
  }, [navigation, data.name])
  useEffect(() => {
    setTitle()
  }, [setTitle])
  if (loading) return <Text>Loading...</Text>
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: data?.sprites?.front_default }}
        style={styles.pokemonImage}
      />
      <Text style={styles.pokemonName}>Name: {formatString(data.name)}</Text>
      <Text style={styles.pokemonDetails}>
        Base Experience: {data.base_experience}
      </Text>
      <Text style={styles.pokemonDetails}>Height: {data.height}</Text>
      <Text
        style={{
          ...styles.pokemonDetails,
          borderBottomColor: '#ccc',
          borderBottomWidth: 1,
        }}
      >
        Weight: {data.weight}
      </Text>
      <TouchableOpacity
        style={styles.pokemonAbilitesButton}
        name="abilities"
        onPress={() =>
          navigation.navigate('PokemonAbilities', {
            abilities: data.abilities,
            name: data.name,
          })
        }
      >
        <Text>Ablities</Text>
      </TouchableOpacity>
      <Divider />
      <Text>Forms: </Text>
      <FlatList
        data={data?.forms}
        keyExtractor={item => item.name}
        style={{ flexGrow: 0, width: '100%' }}
        renderItem={({ item }) => (
          <>
            <TouchableOpacity
              name={item.name}
              style={{
                ...styles.pokemonAbilitesButton,
                margin: 0,
              }}
              onPress={() =>
                navigation.navigate('FormDetails', {
                  formDetails: item.url,
                })
              }
            >
              <Text>{formatString(item.name)}</Text>
            </TouchableOpacity>
            <Divider />
          </>
        )}
      />
      <TouchableOpacity
        name="encounter"
        style={{ ...styles.pokemonAbilitesButton, marginTop: 0 }}
        onPress={() =>
          navigation.navigate('Encounters', {
            encounter: data.location_area_encounters,
          })
        }
      >
        <Text>Encounters</Text>
      </TouchableOpacity>
      <Divider />
      <FlatList
        data={data?.stats}
        style={{ width: '100%' }}
        keyExtractor={item => item.stat.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              ...styles.pokemonAbilitesButton,
              alignItems: 'center',
              marginVertical: 5,
            }}
            onPress={() =>
              navigation.navigate('StatDetails', { statDetails: item.stat.url })
            }
          >
            <Text style={{ fontSize: 16 }}>
              {formatString(item.stat.name)}:{' '}
              <Text
                style={{
                  color: randomColor(),
                }}
              >
                {item.base_stat}
              </Text>
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default PokemonDetails
