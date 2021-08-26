import { StyleSheet } from 'react-native'
import fonts from "../../styles/fonts";

export default StyleSheet.create({
    chip: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15,
        width: 90,
        height: 20,
        top: 0,
        left: 0,
        borderColor: 'orange',
        borderWidth: 1,
        borderBottomRightRadius: 15
    },

    chipLabel: {
        color: 'orange',
        letterSpacing: 1,
        fontFamily: fonts.inter500Medium
    },
})