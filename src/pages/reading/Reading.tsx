import React, { useContext, useEffect, useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import Chip from '../../components/chip/Chip'
import Logo from '../../components/logo/Logo'

import styles from './Styles'
import { Container } from '../../components/container/Container'
import { useNavigation } from '@react-navigation/core'

import NavContext from "../../context/Navgation"
import { api } from '../../services/api'
import { newsInterface } from '../../interfaces'
import { Loading } from '../../components/loading/Loading'

export function Reading() {
    const navigation = useNavigation()
    const [news, setNews] = useState({} as newsInterface)
    const [isReady, setIsReady] = useState<Boolean>(false)

    const { _id } = useContext(NavContext)

    const handleGoBackView = () => {
        setNews({} as newsInterface)
        navigation.goBack();
    }

    useEffect(() => {
        api.get(`/news/${_id}`)
            .then(resp => resp)
            .then(resp => {
                setNews(resp['data']['news'])
                setIsReady(true)
            })
            .catch(error => console.log(error))
    }, [_id])


    return (
        !isReady ? 
        <Loading /> 
        :
        <Container>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backPageView} onPress={handleGoBackView}>
                    <Text style={styles.backPageLabel}>{'<'}- Voltar</Text>
                </TouchableOpacity>
                <Logo />
            </View>
            <View style={styles.readingCard}>
                <View>
                    <Image style={styles.image} source={{ uri: `https://casion-api.herokuapp.com/static/files${news.banner_img}` }} />
                    <Chip title={news.highlight ? "DESTAQUE" : news.headline} />
                    <Text style={styles.readingCardtitle}>{news.title}</Text>
                    <View style={styles.readingCardSubtitleCard}>
                        <Text style={styles.readingCardSubtitleLabel}>{news.subtitle}</Text>
                    </View>
                </View>
                <View style={styles.readingCardBodyText}>
                    <Text style={styles.readingCardBodyTextLabel}>{news.body_text}</Text>
                </View>
            </View>
        </Container>
    )
}