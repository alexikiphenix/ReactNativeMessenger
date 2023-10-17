import React, { useEffect, useState, useRef} from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


const App = () => {
    const messageRef = useRef('');  
    const [message, setMessage] = useState('');
  
    useEffect(() => { messageRef.current = message;  }, [message]);
    const handleChange = (e) => {
      e.preventDefault();
      setMessage(e.target.value);
    };
  
    const sendMessage = (e) => {
      e.preventDefault();
      setTimeout(() => {
        // Most recent value
        alert(messageRef.current);
       }, 2000);
    };
  
    return (
      <View style={styles.container}>
          <TextInput style={styles.msgInput} onChange={handleChange} value={message} />
        <Text>
          <Button title="Envoyer" onPress={sendMessage}>
          Send message
          </Button>
        </Text>
      </View>
    )
  }

  const styles = StyleSheet.create(
    {
      container:
      {
        flex: 1,
        justifyContent: 'center',
      },
      msgInput: {
        width: '95%',
        height: 50,
        borderWidth: 1,
        backgroundColor: 'red'
      }
    }
  )

  export default App;