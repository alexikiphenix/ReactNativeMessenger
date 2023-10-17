import React, { useState, useEffect, InteractionManager } from "react";
import { View, Text, StyleSheet, Button, TextInput, ScrollView } from 'react-native';
import Message from './components/Message';
import talk from './data/talk.json';
import randomMessages from './data/randomMessages.json';

const getMessagesJSONInArray = ( arrayObj ) =>
{
  const messagesArray = []
  arrayObj.map(
    (message) => {      
      messagesArray.push(
         [ 
          message.id, message.sender, 
          message.recipient, message.content        
         ]
       )
    }
  )
  return messagesArray;
}

let messagesArray = getMessagesJSONInArray(talk.messages);

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const App = () => {
  
  const [messages, setMessages] = useState(messagesArray);
  const getRandomMessages = (array) =>
  {
    return array[getRandomIntInclusive(0, array.length-1)];  
  }
   
  const [message, setMessage] = useState("");

  const addRandomMessage = () => {
    const newMessage = [
      's'+new Date().getTime(),
      talk.recipient,
      talk.phone,
      getRandomMessages(randomMessages)
    ]
    messagesArray = messages;
    messagesArray.push(newMessage);    
    setMessages(messagesArray);
    
  }

  const handlePress = () => {
    const newMessage = [
      new Date().getTime(),
      talk.phone,
      talk.recipient,
      message
    ]
    messagesArray.push(newMessage);
    setMessage("");
    setMessages(messagesArray);
    console.log(messagesArray);
    console.log(messages);
    //addRandomMessage();
    InteractionManager.runAfterInteractions(() => {
      // ...long-running synchronous task...
      setTimeout(addRandomMessage, 2000)
    });
    console.log(messages);
  }
  


    return (
      <View style={styles.wrapper} >
        <View style={styles.profileHeader}>
          <Text>Arrow back</Text>
          <Text style={styles.picAndName}>Photo</Text>
          
        </View>
        <View style={styles.messagesBox}>   
          <ScrollView>
            {         
              messages.map((message)=>{                
                return <Message 
                key={message[0]}
                phone={talk.phone} 
                sender={message[1]} 
                content={message[3]}
                />
              })
            }      
          </ScrollView>
        </View>
        <View style={styles.sendBox}>
          <TextInput 
            style={styles.msgInput} 
            value={ message }
            placeholder="Ecrire ici"
            multiline={true}
            onChangeText= {(message) => {setMessage(message)}}
          />          
          <Text>
            <Button 
              onPress = {() => {handlePress()}}
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
    marginBottom: 10,
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