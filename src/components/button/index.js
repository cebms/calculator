import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Btn = ( {value, style, btnPressed} ) => {
    return(
        <TouchableOpacity 
            style={[styles.container, {margin: style.margin}]}
            onPress={() => btnPressed()}
        >
            <Text style={{color: "#FFF", fontWeight: 'bold', fontSize: 16}}>{ value }</Text>
        </TouchableOpacity> 
    )
    
}

export default Btn