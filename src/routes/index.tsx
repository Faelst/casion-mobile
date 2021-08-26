import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackRouters from './stack.routers'

const Routers = () => (
    <NavigationContainer>
        <StackRouters />
    </NavigationContainer>
)

export default Routers