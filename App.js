import { View, Text, StyleSheet } from 'react-native';
import Message from './components/Message';
import talk from './data/talk.json';



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
            talk.messages.map((message)=>{
             return <Message phone={talk.phone} 
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