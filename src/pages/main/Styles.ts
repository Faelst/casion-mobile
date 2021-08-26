import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";

export default StyleSheet.create({
    highlightsImg: { 
        display: "flex", 
        alignItems: 'center' 
    },

    header: {
        margin: 30,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },

    highlights: {
        display: "flex",
        justifyContent: "center",
        marginVertical: 5,
    },

    highlightTitle: {
        fontSize: 26,
        lineHeight: 35,
        fontFamily: fonts.ptSerif700BoldItalic
    },

    footerLabel: {
        display: 'flex',
        flexDirection: 'row-reverse',
        padding: 10,
        marginVertical: 5,
    },

    newsCards: {
        marginVertical: 10
    },
    
    image: {
        width: 366,
        height: 200
    }
})