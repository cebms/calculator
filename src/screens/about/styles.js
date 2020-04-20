import React from 'react'
import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
        paddingTop: Constants.statusBarHeight + 10,
        backgroundColor: "#121212"
    },
    header: {
        flexDirection: 'row'
    },
    info: {
        alignItems: 'center',
        marginTop: 50
    },
    name: {
        color: "#FFF",
        fontSize: 28,
        fontFamily: 'Roboto',
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 24,
        color: "#FFF"
    },
    logo: {
        backgroundColor: "#ff1e56",
        padding:7,
        borderRadius:20
    }
})

export default styles