import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import Message from './components/Message';
import talk from './data/talk.json';



const App = () => {

  const messagesArray = []
  talk.messages.map(
    (message) => {      
      messagesArray.push(
         [ 
          message.id, message.sender, 
          message.recipient, message.content        
         ]
       )
    }
  )
  const [messages, setMessages] = useState(messagesArray);
  const [message, setMessage] = useState("");

  const handlePress = (messages) => {
    setMessages(messages);
  }


    return (
      <View style={styles.wrapper} >
        <View style={styles.profileHeader}>
          <Text>Arrow back</Text>
          <Text style={styles.picAndName}>Photo</Text>
          
        </View>
        <View style={styles.messagesBox}>                 
          {         
            messages.map((message)=>{
              console.log(message[0]);
              return <Message 
              key={message[0]}
              phone={talk.phone} 
              sender={message[1]} 
              content={message[3]}
              />
            })
          }      
        </View>
        <View style={styles.sendBox}>
          <TextInput 
            style={styles.msgInput} 
            value={ message }
            placeholder="Ecrire ici"
            multiline={true}
            
          />          
          <Text>
            <Button 
              onPress = {() => {setMessages(messages)}}
              title="Envoyer" 
              color='green'
              accessibilityLabel="bouton envoyer"
              onChange = { () => {write('saisie text')}}
            />
          </Text>
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
  },
  profileHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    borderWidth: 1,
    // borderColor: 'black'
  },
  messagesBox : {
    flex: 12,
    padding: 5,
    // borderWidth: 1,   
  }
  ,
  sendBox: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 5,
    backgroundColor: 'lightblue'
  },
  msgInput: {
    width: '100%',
    height: 40,
    borderWidth: 1,
  }
})

export default App;