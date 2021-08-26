import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";

export default StyleSheet.create({
    readingCardBodyTextLabel: {
        fontFamily: fonts.Inter400Regular,
        fontSize: 17,
        lineHeight: 30
    },

    readingCardBodyText: {
        marginVertical: 20
    },

    readingCardSubtitleLabel: {
        fontFamily: fonts.ptSerif400Regular,
        fontSize: 20,
        lineHeight: 25,
        color: "#7c868f"
    },

    readingCardSubtitleCard: {
        marginVertical: 20,
        padding: 10,
        borderLeftWidth: 3,
        borderColor: 'orange'
    },

    readingCardtitle: {
        fontFamily: fonts.ptSerif700BoldItalic,
        fontSize: 32,
        lineHeight: 36
    },

    readingCard: {
    },

    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 25
    },

    backPageLabel: {
        fontFamily: fonts.Inter400Regular,
        fontSize: 16,
        lineHeight: 15
    },

    backPageView: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },

    image: {
        width: 366,
        height: 200
    }
})