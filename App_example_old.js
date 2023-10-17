import React, { useEffect, useState, useRef} from 'react';
import { View, Text, TextInput, Button } from 'react-native';


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
        alert(messageRef.current);    }, 2000);
    };
  
    return (
      <View>
        <Text>
          <TextInput onChange={handleChange} value={message} />
          <Button title="Envoyer" onPress={sendMessage}>
          Send message
          </Button>
        </Text>
      </View>
    )
  }

  export default App;