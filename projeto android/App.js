import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import logo from './assets/taitai.png';
import ProdutoItem from './src/telas/ProdutoItem';


export default function App() {
  return <ProdutoItem/>
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141436',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {

    color: 'darkorange',
    fontSize: 40,
    fontWeight: 'bold',


  },
  logo: {
    width: 200,
    height: 200,

  }
});
