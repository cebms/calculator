import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Calculator from './screens/home/index'
import About from './screens/about/index'

const Stack = createStackNavigator()
const Routes = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="home" component={ Calculator } />
                <Stack.Screen name="about" component={ About } />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes