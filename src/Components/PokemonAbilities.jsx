import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import styles from '../styles/abilityStyles'
import formatString from '../helpers/formatString'
const PokemonAbilities = ({ route, navigation }) => {
  const { abilities, name } = route.params
  return (
    <FlatList
      data={abilities}
      ListHeaderComponent={() => {
        return (
          <Text style={{ fontSize: 28 }}>{formatString(name)} Abilites</Text>
        )
      }}
      keyExtractor={item => item.ability.name}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.item}
          onPress={() =>
            navigation.navigate('AbilityDetails', { url: item.ability.url })
          }
        >
          <Text style={styles.abilityName}>
            {formatString(item.ability.name)}
          </Text>
        </TouchableOpacity>
      )}
      contentContainerStyle={styles.listItem}
      style={styles.list}
      ListFooterComponent={() => (
        <View style={styles.footer}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
            This section contains links to the pokemons abilities. You can go to
            the ability details by touching on the desired skills name
          </Text>
        </View>
      )}
    />
  )
}

export default PokemonAbilities
