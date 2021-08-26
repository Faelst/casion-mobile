import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Main } from '../pages/main/Main';
import { Reading } from '../pages/reading/Reading';

const stackRouters = createNativeStackNavigator()

const AppRouters: React.FC = () => (
    <stackRouters.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <stackRouters.Screen
            name="Main"
            component={Main}
        />
        <stackRouters.Screen
            name="Reading"
            component={Reading}
        />
    </stackRouters.Navigator>
)

export default AppRouters;