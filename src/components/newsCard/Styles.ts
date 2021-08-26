import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";

export default StyleSheet.create({
    newsCardTitle: {
        fontFamily: fonts.Inter400Regular,
        fontSize: 17,
        lineHeight: 25
    },

    newCardsDescription: {
        maxWidth: 240,
        display: 'flex',
        justifyContent: 'center'
    },

    newsCardImg: {
        width: 100,
        height: 100,
        marginRight: 30,
        position: 'relative',
        borderLeftWidth: 2,
        borderLeftColor: 'orange'
    },

    newsCard: {
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 16,
        maxWidth: '100%',
        borderColor: '#e1e4e5',
        borderBottomWidth: 1,
        alignItems: 'center',
    },

    image: {
        borderBottomRightRadius: 20,
        width: "100%",
        height: "100%"
    }
})