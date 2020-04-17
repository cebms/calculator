import React from 'react'
import { View, Text, Image } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'


const About = () => {
    const navigation = useNavigation()
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}><Feather name="arrow-left" size={28} color="#FFF"/></TouchableOpacity>
            </View>

        <View style={styles.info}>
            <Image source={require('../../assets/profilePicture.png')}/>
            <Text style={styles.name}>Carlos Mendes</Text>
            <View style={{flexDirection:'row',marginTop:10}}>
                <View style={styles.logo}>
                    <Feather name="github" color="#FFF" size={20}/>
                </View>
                <Text style={styles.subtitle}>/cebms</Text>
            </View>
            
        </View>
            
        </View>
    )
}

export default About