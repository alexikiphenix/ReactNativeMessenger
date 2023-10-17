import React, { useEffect, useState, useCounter } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const multiply = (nb1, nb2) => {
  return nb1 * nb2;
}
const App = () => {
  const [multiplication, setMultiplication] = useState(()=>multiply(1, 2));
  const handlePress = () => {
    setMultiplication(current => current * 2);
  }

  // Réactualisation
  console.log('Reactualisation (Re-render)', multiplication);
  return (
    <View style={styles.container}>
      <Text>
          <Button onPress={handlePress} title="cliquer ici" />{multiplication}
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