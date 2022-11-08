import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.head}>

        <View style={styles.buttom}>
          <Text style={styles.Textbuttom}>Menu</Text>
        </View>

        <View style={styles.buttom}>
          <Text style={styles.Textbuttom}>Logs</Text>
        </View>

        <View style={styles.buttom}>
          <Text style={styles.Textbuttom}>Credits</Text>
        </View>

      </View>
      <View style={styles.main}>
        <View>
          <View></View>
        </View>
      </View>

      <View style={styles.footer}>
        <View>
          <View><Text>Exercício 03 - DDM</Text></View>
        </View>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A4AAEA',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  head: {
    backgroundColor: '#c4c4c4',
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

  },

  main: {
    width: '100%',
    flex: 1,
    height: 60,
    backgroundColor: '#8A8FC3',
    
  },

  footer: {

    backgroundColor: '#4E466A',
    width: '100%',
    height: 55,

  },

  buttom: {
    backgroundColor: 'black',
    width: 77,
    height: 28,
    borderRadius: 10,
  },

  Textbuttom: {
    fontSize:16,
    color: 'white',
    textAlign: 'center',
    
  },
  Textfooter:{
    textAlign:'center',
    fontSize:20
  }
});
