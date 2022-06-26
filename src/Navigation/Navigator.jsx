import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { lazy } from 'react'

const Stack = createNativeStackNavigator()
const PokemonDetails = lazy(() => import('../Components/PokemonDetails'))
const ListPokemon = lazy(() => import('../Components/ListPokemon'))
const PokemonAbilities = lazy(() => import('../Components/PokemonAbilities'))
const AbilityDetails = lazy(() => import('../Components/AbilityDetails'))
const Encounters = lazy(() => import('../Components/Encounters'))
const AreaDetails = lazy(() => import('../Components/AreaDetails'))
const FormDetails = lazy(() => import('../Components/FormDetails'))
const StatDetails = lazy(() => import('../Components/StatDetails'))
const MoveDetails = lazy(() => import('../Components/MoveDetails'))
const MoveDamageClassDetails = lazy(() =>
  import('../Components/MoveDamageClassDetails'),
)
const NatureDetails = lazy(() => import('../Components/NatureDetails'))
const FlavorDetails = lazy(() => import('../Components/FlavorDetails'))
const MoveBattleStyleDetails = lazy(() =>
  import('../Components/MoveBattleStyleDetails'),
)
const PokeathlonStatDetails = lazy(() =>
  import('../Components/PokeathlonStatDetails'),
)
const TargetingDetails = lazy(() => import('../Components/TargetingDetails'))
const TypeDetails = lazy(() => import('../Components/TypeDetails'))
const GenerationDetails = lazy(() => import('../Components/GenerationDetails'))
const Navigator = () => {
  return (
    <Stack.Navigator initialRouteName="ListPokemon">
      <Stack.Screen name="ListPokemon" component={ListPokemon} />
      <Stack.Screen name="PokemonDetails" component={PokemonDetails} />
      <Stack.Screen name="PokemonAbilities" component={PokemonAbilities} />
      <Stack.Screen name="AbilityDetails" component={AbilityDetails} />
      <Stack.Screen name="Encounters" component={Encounters} />
      <Stack.Screen name="AreaDetails" component={AreaDetails} />
      <Stack.Screen name="FormDetails" component={FormDetails} />
      <Stack.Screen name="StatDetails" component={StatDetails} />
      <Stack.Screen name="MoveDetails" component={MoveDetails} />
      <Stack.Screen
        name="MoveDamageClassDetails"
        component={MoveDamageClassDetails}
      />
      <Stack.Screen name="NatureDetails" component={NatureDetails} />
      <Stack.Screen name="FlavorDetails" component={FlavorDetails} />
      <Stack.Screen
        name="MoveBattleStyleDetails"
        component={MoveBattleStyleDetails}
      />
      <Stack.Screen
        name="PokeathlonStatDetails"
        component={PokeathlonStatDetails}
      />
      <Stack.Screen name="TargetingDetails" component={TargetingDetails} />
      <Stack.Screen name="TypeDetails" component={TypeDetails} />
      <Stack.Screen name="GenerationDetails" component={GenerationDetails} />
    </Stack.Navigator>
  )
}

export default Navigator
