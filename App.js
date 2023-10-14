import { View, Text, StyleSheet } from 'react-native';

const userId = 1;

const Message = ({id, senderName, senderId, recipientId, content}) => {
  return (
    <View>
      {
        senderId == userId ? 
        ( 
          <Text style={styles.msgUser}>
            {senderName} 
            <Text>{content}</Text>
          </Text>
        )
        :
        ( 
          <Text style={styles.msgNonUser}>
            {senderName} 
            <Text>{content}</Text>
          </Text>
        )        
      }
    </View>
  )
}

const App = () => {
  const getNames = (id, user, recipientId) =>{
      return `${id} - expéditeur - ${user} -------------- destinataire : ${recipientId}`;
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
          <Message senderId="1" />
          <Message user="Marcus" recipientId="Louisa" />       
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
  },
  msgUser: {
    width: '45%',
    padding: 7,
    alignSelf: 'flex-end',
    backgroundColor: 'lightgreen'
  },
  msgNonUser: {
    width: '45%',
    padding: 7,
    alignSelf: 'flex-start',
    backgroundColor: 'pink'
  },
})

export default App;