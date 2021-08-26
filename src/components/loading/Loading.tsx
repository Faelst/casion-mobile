import React, { useRef } from 'react'
import { Animated, Image, Text, View } from 'react-native'

import donutsLoading from '../../../assets/loading.png'

import styles from './Styles'

export function Loading(props: any) {
    const rotateValue = new Animated.Value(0)

    const componentDidMount = () => {
        startImageRotationFunction()
    }

    const startImageRotationFunction = () => {
        rotateValue.setValue(0)
        Animated.timing(rotateValue, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true
        }).start(() => startImageRotationFunction());
    }

    const rotationData = rotateValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })
    
    componentDidMount()
    return (
        <View style={styles.loadingContainer}>
            <Animated.Image style={{
                transform: [{ rotate: rotationData }]
            }} 
            source={donutsLoading}></Animated.Image>
        </View>
    )
}