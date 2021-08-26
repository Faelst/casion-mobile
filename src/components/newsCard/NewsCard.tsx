import React, { useEffect } from 'react'
import { Image, Text, View } from 'react-native'
import Chip from '../chip/Chip'

import styles from './Styles'

export function NewsCard(props: any) {
    return (
        <View style={styles.newsCard}>
            <View style={styles.newsCardImg}>
                <Image style={styles.image} source={{ uri: `http://192.168.15.34:3333/static/files${props.smallImg}` }} />
            </View>
            <View style={styles.newCardsDescription}>
                <Chip title={props.highlight ? "DESTAQUE" : props.headline} />
                <Text style={styles.newsCardTitle}>{props.title}</Text>
            </View>
        </View>
    )
}