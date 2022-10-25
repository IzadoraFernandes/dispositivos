import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Meucomponente from './Meucomponente';
import Meuidade from './Meuidade';
import Meumatricula from './Meumatricula';
import Crusodeads from './Crusodeads';


export default function App() {
  return (
    <View style={styles.container}>
      <Crusodeads/>
      <Meuidade/>
      <Meumatricula/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
