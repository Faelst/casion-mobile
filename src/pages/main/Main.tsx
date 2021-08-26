import React, { useContext, useEffect, useState } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { api, apiGraphql } from '../../services/api'
import axios from 'axios'

import fonts from '../../styles/fonts'
import styles from './Styles'

import donutsImg from '../../assets/images/news/donuts.png'
import Logo from '../../components/logo/Logo'
import Chip from '../../components/chip/Chip'

import { Container } from '../../components/container/Container'
import { NewsCard } from '../../components/newsCard/NewsCard'
import { useNavigation } from '@react-navigation/core'

import NavContext from "../../context/Navgation"
import { newsInterface } from '../../interfaces'
import AppLoading from 'expo-app-loading'
import { Loading } from '../../components/loading/Loading'

export function Main() {
    const [newsList, setNewsList] = useState([] as Array<newsInterface>)
    const [newsHighlights, setNewsHighLights] = useState({} as newsInterface)

    const navigation = useNavigation()

    const { _id, setNewIdProvider } = useContext(NavContext)

    useEffect(() => {
        apiGraphql.post('',
            { "query": "query {\n  news{ _id title headline highlight small_img banner_img }\n}" }
        )
            .then((result) => {
                const { data } = result.data
                setNewsList(data.news)
                setNewsHighLights(data.news.filter((news: newsInterface) => news.highlight).shift())
            });
    }, [])

    const readingHighlightsNews = (_id: String) => {
        setNewIdProvider(_id)
        navigation.navigate("Reading")
    }

    if (!newsList.length)
        return <Loading />


    return (
        <Container>
            <View style={styles.header}>
                <Logo />
            </View>
            <TouchableOpacity style={styles.highlights} onPress={() => readingHighlightsNews(newsHighlights['_id'])}>
                <View style={styles.highlightsImg}>
                    <Image style={styles.image} source={{ uri: `https://casion-api.herokuapp.com/static/files${newsHighlights['banner_img']}` }} />
                </View>
                <Chip title="DESTAQUE" />
                <Text style={styles.highlightTitle}>{newsHighlights['title']}</Text>
                <View style={styles.footerLabel}>
                    <Text style={{ fontFamily: fonts.Inter400Regular }}>Leia agora -{'>'}</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.newsCards}>
                <View>
                    <Text style={{ fontFamily: fonts.ptSerif700BoldItalic }}>Todas as notícias</Text>
                </View>

                {
                    newsList.map(news =>
                        <TouchableOpacity
                            key={news['_id']}
                            onPress={() => readingHighlightsNews(news['_id'])}
                        >
                            <NewsCard
                                key={news['_id']}
                                _id={news['_id']}
                                highlight={news['highlight']}
                                title={news['title']}
                                headline={news['headline']}
                                smallImg={news['small_img']}
                            />
                        </TouchableOpacity>
                    )
                }

            </View>
        </Container >
    )
}