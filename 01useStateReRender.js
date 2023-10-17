import React, { useEffect, useState, useCounter } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const App = () => {
  const [counter, setCounter] = useState(0);

  // Réactualisation
  console.log('Reactualisation (Re-render)', counter);

  const increase = () => {
    console.log('counter', counter);
    setCounter(counter + 1);
    console.log('counter + 1 = ', counter);
    setCounter(maintenant => maintenant + 1);
    console.log('curr => curr + 1 = ', counter);
  };



  return (
    <View style={styles.container}>
      <Text>
          <Button onPress={increase} title="cliquer ici" />{counter}
      </Text> 
    
    </View>
  );
};

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      padding: 70,
    }
  }
)


export default App;