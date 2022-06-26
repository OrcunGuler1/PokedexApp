import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'
import { Screen } from '../constants/constants'
const PokemonAbilities = ({ route, navigation }) => {
  const { abilities } = route.params
  return (
    <FlatList
      data={abilities}
      keyExtractor={(item) => item.ability.name}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('AbilityDetails', { url: item.ability.url })
            }
          >
            <Text>{item.ability.name}</Text>
          </TouchableOpacity>
        </View>
      )}
      contentContainerStyle={styles.listItem}
      style={styles.list}
    />
  )
}

export default PokemonAbilities

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  list: {
    width: Screen.width,
  },
  listItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
})
