import React from 'react'
import { Text, View } from 'react-native'

import styles from './Styles'

interface ChipPropsInterface {
    title?: String
}

export default function Chip(props: ChipPropsInterface) {
    return (
        <View style={styles.chip}>
            <Text style={styles.chipLabel}>{props.title}</Text>
        </View>
    )
}