import React, { useEffect, useState, useCounter } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const App = () => {
  const [counter, setCounter] = useState(0);
  const handlePress = () => {    
    // La fonction callback permet d'obtenir valeur courante
    setCounter(current => current + 1);

    // Sans current modification au moment du re-render :  
    // setCounter(counter + 1);
  }

  // Réactualisation
  console.log('Reactualisation (Re-render)', counter);
  return (
    <View style={styles.container}>
      <Text>
          <Button onPress={handlePress} title="cliquer ici" />{counter}
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