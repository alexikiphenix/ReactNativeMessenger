import { View, Text, StyleSheet } from 'react-native';
const sender2 = 1;
const id2 = 2;

const Message = ({id, talkNumber, sender, recipient, content}) => {
    return (
      <View>
        {
          sender === talkNumber ? 
          ( 
            <Text style={styles.msgUser}>
              <View>
                <Text>sender:{sender}</Text>
            	</View>              
              <Text>{content}</Text>
            </Text>
          )
          :
          ( 
            <Text style={styles.msgNonUser}>
              <View>
                <Text>sender:{sender}</Text>
            	</View>              
              <Text>{content}</Text>
            </Text>
          )        
        }
      </View>
    )
  }

const styles = StyleSheet.create(
    {
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
    }
)

export default Message;