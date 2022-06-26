import React, { Suspense } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Screen } from './src/constants/constants'
import { NavigationContainer } from '@react-navigation/native'
import Navigator from './src/Navigation/Navigator'
const Loader = () => <Text>Loading..</Text>
const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </Suspense>
  )
}

const styles = StyleSheet.create({
  container: {
    height: Screen.height,
    width: Screen.width,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App
