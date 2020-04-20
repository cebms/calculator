import React from 'react'
import { StyleSheet } from 'react-native'

import Constants from 'expo-constants'



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        paddingTop: Constants.statusBarHeight + 10,
        justifyContent: 'center',
        backgroundColor: '#121212'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        
    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    visor: {
        flexDirection: 'row',
        justifyContent: "flex-end",
        marginBottom: 30,
    },
    numberStyle: {
        color: "#FFF",
        fontSize: 50,
        fontWeight: 'bold'
    },
    keyboard: {
        flex: 1,
        
    },
    aboutView: {
        height: 50,
        width: 50,
    },
    aboutView: {
        alignItems: 'flex-end',
        marginBottom: 20
    },
    about: {
        backgroundColor: "#549",
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 50,
        borderRadius: 25
    },
})

export default styles