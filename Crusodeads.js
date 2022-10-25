import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function Crusodeads(){
    return(
        
        <View style = {styles.container}>
            <Text>Izadora Fernandes </Text>
        </View> 
    )
}

const styles = StyleSheet.create({
        container: {
          backgroundColor: '#fffcce',
          width: '80%',
          height: 100,
          alignItems: 'center',
          margin: 80,
          borderColor:'#DDE38A',
          borderWidth: 4,
    
        },
      
        texto:{
          color: '#fff',
          fontSize: 25,
        },
    
});