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

const PokeathlonStatDetails = lazy(() =>
  import('../Components/PokeathlonStatDetails'),
)
const TargetingDetails = lazy(() => import('../Components/TargetingDetails'))
const TypeDetails = lazy(() => import('../Components/TypeDetails'))
const GenerationDetails = lazy(() => import('../Components/GenerationDetails'))
const VersionDetails = lazy(() => import('../Components/VersionDetails'))
const MethodDetails = lazy(() => import('../Components/MethodDetails'))
const LocationDetails = lazy(() => import('../Components/LocationDetails'))
const RegionDetails = lazy(() => import('../Components/RegionDetails'))
const PokedexDetails = lazy(() => import('../Components/PokedexDetails'))
const Navigator = () => {
  return (
    <Stack.Navigator initialRouteName="ListPokemon">
      {/*done */}
      <Stack.Screen
        name="ListPokemon"
        component={ListPokemon}
        options={{ title: 'Pokemon List' }}
      />
      {/*done */}
      <Stack.Screen name="PokemonDetails" component={PokemonDetails} />
      {/*done */}
      <Stack.Screen
        name="PokemonAbilities"
        component={PokemonAbilities}
        options={{ title: 'Abilities' }}
      />
      {/*done */}
      <Stack.Screen name="AbilityDetails" component={AbilityDetails} />
      {/*done */}
      <Stack.Screen name="Encounters" component={Encounters} />
      {/*done */}
      <Stack.Screen name="AreaDetails" component={AreaDetails} />
      {/*done */}
      <Stack.Screen name="FormDetails" component={FormDetails} />
      {/*done */}
      <Stack.Screen name="StatDetails" component={StatDetails} />
      <Stack.Screen name="MoveDetails" component={MoveDetails} />
      <Stack.Screen
        name="MoveDamageClassDetails"
        component={MoveDamageClassDetails}
      />
      <Stack.Screen name="NatureDetails" component={NatureDetails} />
      <Stack.Screen name="FlavorDetails" component={FlavorDetails} />
      <Stack.Screen
        name="PokeathlonStatDetails"
        component={PokeathlonStatDetails}
      />
      <Stack.Screen name="TargetingDetails" component={TargetingDetails} />
      <Stack.Screen name="TypeDetails" component={TypeDetails} />
      {/*done */}
      <Stack.Screen name="GenerationDetails" component={GenerationDetails} />
      {/*done */}
      <Stack.Screen name="VersionDetails" component={VersionDetails} />
      <Stack.Screen name="MethodDetails" component={MethodDetails} />
      <Stack.Screen name="LocationDetails" component={LocationDetails} />
      <Stack.Screen name="RegionDetails" component={RegionDetails} />
      <Stack.Screen name="PokedexDetails" component={PokedexDetails} />
    </Stack.Navigator>
  )
}

export default Navigator
