
import React, {Component} from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Header } from 'react-native-elements';
import Home from './Screen/Home/Home';

class App extends Component{
  render(){
    return(
      <ScrollView style={styles.main_container}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'TEXLOC', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <Home />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex : 1
  }
})

export default App;
