import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'

import styles from './Styles'

type Props = {
    children?: JSX.Element | JSX.Element[];
}

export function Container({ children }: Props) {
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={styles.container}>
                <SafeAreaView>
                    {children}
                </SafeAreaView>
            </View>
        </ScrollView>
    )
}