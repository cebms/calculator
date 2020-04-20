import React, { useState } from 'react'
import { View, Text } from 'react-native' 
import { Feather } from '@expo/vector-icons'

import styles from './styles'
import Btn from '../../components/button/index'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

let output = null
let inputs = []
let a = 0

const Calculator = () => {
    const Navigation = useNavigation()

    const [number, setNumber] = useState([])

    let register = (op) =>{
        var toNumber = 0
        var length = number.length
        for(var pos in number){
            toNumber += number[pos]*(10**(length-1))
            length--
        }
        inputs[inputs.length] = toNumber
        if(op != undefined){
            inputs[inputs.length] = op
        }
        setNumber([])
    }

    let calc = () => {
            while(inputs.indexOf('/') != -1 || inputs.indexOf('*') != -1){
                for(let pos=0; pos < inputs.length; pos++){
                    switch(inputs[pos]){
                        case '*':
                            let n1 = inputs[parseInt(pos, 10)+1]
                            let n2 = inputs[parseInt(pos, 10)-1]
                            let product = n1 * n2
                            inputs[parseInt(pos, 10)-1] = product
                            inputs.splice(parseInt(pos, 10), 2)
                            pos = 0
                            break
                        case '/':
                            
                            let n3 = inputs[parseInt(pos, 10)+1]
                            let n4 = inputs[parseInt(pos, 10)-1]
                            let quotient = n4 / n3
                            inputs[parseInt(pos, 10)-1] = quotient
                            inputs.splice(parseInt(pos, 10), 2)
                            pos = 0
                            break
                    }
                }
            }

            for(let pos=0; pos < inputs.length; pos++){
                switch(inputs[pos]){
                    case '+':
                        let n1 = inputs[parseInt(pos, 10)+1]
                        let n2 = inputs[parseInt(pos, 10)-1]
                        let sum = n1 + n2
                        inputs.splice(parseInt(pos, 10)-1, parseInt(pos, 10)+1)
                        inputs[parseInt(pos, 10)-1] = sum
                        pos = 0
                        break
                    case '-':
                        let n3 = inputs[parseInt(pos, 10)+1]
                        let n4 = inputs[parseInt(pos, 10)-1]
                        let diff = n4-n3
                        inputs.splice(parseInt(pos, 10)-1, parseInt(pos, 10)+1)
                        inputs[parseInt(pos, 10)-1] = diff
                        pos = 0
                        break
                    
                }
            }
            output = inputs[0]
            inputs.splice(0,(inputs.length))
            setNumber([output])
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
                <Btn value={ 1 } style={{margin: 10}} btnPressed={() => {
                    setNumber([...number, 1])
                    output = output==null?'1':output+'1'
                    }}/>
                <Btn value={ 2 } style={{margin: 10}} btnPressed={() => {
                    setNumber([...number, 2])
                    output = output==null?'2':output+'2'
                }}/>
                <Btn value={ 3 } style={{margin: 10}} btnPressed={() => {
                    setNumber([...number, 3])
                    output = output==null?'3':output+'3'
                }}/>
                <Btn value={'AC'} style={{margin: 10}} btnPressed={() => {
                    setNumber([])
                    output = null
                    inputs.splice(0,(inputs.length))
                    }}/>
            </View>

            <View style={styles.row}>
                <Btn value={ 4 } style={{margin: 10}} btnPressed={() => {
                    setNumber([...number, 4])
                    output = output==null?'4':output+'4'
                }}/>
                <Btn value={ 5 } style={{margin: 10}} btnPressed={() => {
                    setNumber([...number, 5])
                    output = output==null?'5':output+'5'
                }}/>
                <Btn value={ 6 } style={{margin: 10}} btnPressed={() => {
                    setNumber([...number, 6])
                    output = output==null?'6':output+'6'
                }}/>
                <Btn value={ '+' } style={{margin: 10}} btnPressed={() => {
                    output = output==null?'+':output+'+'
                    register('+')
                }}/>
            </View>

            <View style={styles.row}>
                <Btn value={ 7 } style={{margin: 10}} btnPressed={() => {
                    setNumber([...number, 7])
                    output = output==null?'7':output+'7'
                }}/>
                <Btn value={ 8 } style={{margin: 10}} btnPressed={() => {
                    setNumber([...number, 8])
                    output = output==null?'8':output+'8'
                }}/>
                <Btn value={ 9 } style={{margin: 10}} btnPressed={() => {
                    setNumber([...number, 9])
                    output = output==null?'9':output+'9'
                }}/>
                <Btn value={ '-' } style={{margin: 10}} btnPressed={() => {
                    output = output==null?'-':output+'-'
                    register('-')
                }}/>
            </View>

            <View style={styles.bottomRow}>
                <Btn value={ '='} style={{margin: 10}} btnPressed={() => {
                    register(undefined)
                    calc()
                }}/>
                <Btn value={ 0 } style={{margin: 10}} btnPressed={() => {
                    setNumber([...number, 0])
                    output = output==null?'0':output+'0'
                }}/>
                <Btn value={ '÷' } style={{margin: 10}} btnPressed={() => {
                    output = output==null?'÷':output+'÷'
                    register('/')
                }}/>
                <Btn value={ 'X' } style={{margin: 10}} btnPressed={() =>  {
                    output = output==null?'x':output+'x'
                    register('*')
                }}/>
            </View>
            </View>
        </View>
    )
}

export default Calculator