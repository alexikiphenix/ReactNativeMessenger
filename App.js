import { View, Text, StyleSheet } from 'react-native';
import Message from './components/Message';
import Talk from './data/talk.json';

const talk = [
  {id: 1}, 
  {talkNumber: 33611111111},
  {
    messages : [
      {
        id: 1, 
        sender: 33611111111,
        recipient: 33622222222,
        content: "Coucou"
      },
      {
        id: 2, 
        sender: 33622222222,
        recipient: 33611111111,
        content: "Hello"
      },
      {
        id: 3, 
        sender: 33611111111,
        recipient: 33622222222,
        content: "Comment vas-tu ?"
      },
      {
        id: 4, 
        sender: 33622222222,
        recipient: 33611111111,
        content: "Bien merci et toi ?"
      },
      {
        id: 5, 
        sender: 33611111111,
        recipient: 33622222222,
        content: "au top"
      },
    ]  
  }

];




const App = () => {
  const getNames = (id, user, recipient) =>{
      return `${id} - expéditeur - ${user} -------------- destinataire : ${recipient}`;
  }
    return (
      <View style={styles.wrapper} >
        <View style={styles.profileHeader}>
          <Text>Arrow back</Text>
          <Text style={styles.picAndName}>
            <Text>Photo</Text>
          </Text>
        </View>
        <View style={styles.messagesBox}>                 
          {
            talk[2].messages.map((message)=>{
             return <Message talkNumber={talk[1].talkNumber} 
                sender={message.sender} 
                content={message.content}
              />
            })
          }      
        </View>
        <View style={styles.sendBox}>
          <Text>
            {/* <TextImput></TextImput> */}
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
    borderWidth: 1,   
  }
  ,
  sendBox: {
    flex: 2,
    padding: 5,
    backgroundColor: 'blue'
  }
})

export default App;