import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function Meucomponente(){
    return(
        
        <View style = {styles.container}>
            <Text>Nome = Izadora Fernandes </Text>
        </View> 
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'purple',
      width: '100%',
      height: 30,
      alignItems: 'center',
      margin: 10
    },
  
    texto:{
      color: '#fff',
      fontSize: 25,
    },

});