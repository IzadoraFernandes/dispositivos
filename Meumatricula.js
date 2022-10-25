import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function Meumatricula(){
    return(
        
        <View style = {styles.container}>
            <Text>Matricula = 202110940000000 </Text>
        </View> 
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E4E7EA',
        width: '80%',
        height: 40,
        alignItems: 'center',
        margin: 20,
        borderColor:'#C6C3D5',
        borderWidth: 4,
    },
  
    texto:{
      color: '#fff',
      fontSize: 25,
    },

});