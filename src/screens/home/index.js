import React, { useState } from 'react'
import { View, Text } from 'react-native' 
import { Feather } from '@expo/vector-icons'

import styles from './styles'
import Btn from '../../components/button/index'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

var operation
var operands = []

const Calculator = () => {
    const Navigation = useNavigation()
    const [number, setNumber] = useState([])
    
    let output = 0
    let length = number.length

    for(var pos in number){
        output += number[pos]*(10**(length-1))
        length--
    }

    const keep = (op) => {
        console.log(`The operation is ${op}`)
        operation = op
        operands[0] = output
        let copy = [...number]
        for(var pos in copy){
            copy[pos] = 0
        }
        setNumber(copy)
        console.log(operands)
    }

    const calculate = () => {
        operands[1] = output
        switch(operation){
            case '+':
                setNumber([operands[0] + operands[1]])
                break
            case '-':
                setNumber([operands[0] - operands[1]])
                break
            case '/':
                setNumber([operands[0] / operands[1]])
                break
            case '*':
                setNumber([operands[0] * operands[1]])
        }
        console.log(operands)
    }

    return(
        <View style={styles.container}>
            <View style={styles.aboutView}>
                <TouchableOpacity style={styles.about} onPress={() => Navigation.navigate('about')}>
                    <Feather name='github' color='#FFF' size={26}/>
                </TouchableOpacity>
            </View>
            <View style={styles.visor}>
                <Text style={styles.numberStyle}>{ output }</Text>
            </View>
            <View style={styles.keyboard}>
            <View style={styles.row}>
                <Btn value={ 1 } style={{margin: 10}} btnPressed={() => setNumber([...number, 1])}/>
                <Btn value={ 2 } style={{margin: 10}} btnPressed={() => setNumber([...number, 2])}/>
                <Btn value={ 3 } style={{margin: 10}} btnPressed={() => setNumber([...number, 3])}/>
                <Btn value={'clr'} style={{margin: 10}} btnPressed={() => {
                    setNumber([])
                    operands = [0,0]
                    }
                    }/>
            </View>

            <View style={styles.row}>
                <Btn value={ 4 } style={{margin: 10}} btnPressed={() => setNumber([...number, 4])}/>
                <Btn value={ 5 } style={{margin: 10}} btnPressed={() => setNumber([...number, 5])}/>
                <Btn value={ 6 } style={{margin: 10}} btnPressed={() => setNumber([...number, 6])}/>
                <Btn value={ '+' } style={{margin: 10}} btnPressed={() => keep('+')}/>
            </View>

            <View style={styles.row}>
                <Btn value={ 7 } style={{margin: 10}} btnPressed={() => setNumber([...number, 7])}/>
                <Btn value={ 8 } style={{margin: 10}} btnPressed={() => setNumber([...number, 8])}/>
                <Btn value={ 9 } style={{margin: 10}} btnPressed={() => setNumber([...number, 9])}/>
                <Btn value={ '-' } style={{margin: 10}} btnPressed={() => keep('-')}/>
            </View>

            <View style={styles.bottomRow}>
                <Btn value={ '='} style={{margin: 10}} btnPressed={() => calculate()}/>
                <Btn value={ 0 } style={{margin: 10}} btnPressed={() => setNumber([...number, 0])}/>
                <Btn value={ '/' } style={{margin: 10}} btnPressed={() => keep('/')}/>
                <Btn value={ '*' } style={{margin: 10}} btnPressed={() =>  keep('*')}/>
            </View>
            </View>
        </View>
    )
}

export default Calculator