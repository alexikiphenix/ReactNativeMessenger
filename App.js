import { View, Text, StyleSheet } from 'react-native';


const App = () => {
    return (
      <View style={styles.wrapper} >
        <View>
          <Text style={{backgroundColor: 'lightblue'}}>Essai 1</Text>
          <Text style={{backgroundColor: 'pink'}}>Essai 2</Text>
          <Text style={{backgroundColor: 'lightgreen'}}>Essai 3</Text>
        </View>
        <View>
          <Text style={{backgroundColor: 'lightblue'}}>Essai 1</Text>
          <Text style={{backgroundColor: 'pink'}}>Essai 2</Text>
          <Text style={{backgroundColor: 'lightgreen'}}>Essai 3</Text>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,    
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 45,    
  }
})

export default App;