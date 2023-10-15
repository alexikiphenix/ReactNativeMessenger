import { View, Text, StyleSheet } from 'react-native';


const Message = ({id, phone, sender, recipient, content}) => {
    return (
      <View>
        {
          sender === phone ? 
          ( 
            <View style={styles.msgUser}>              
                <Text style={ styles.msgHeader }>{sender}</Text>            	
                <Text>{content}</Text>                      
            </View>
          )
          :
          ( 
            <View style={styles.msgNonUser}>              
                <Text style={ styles.msgHeader }>{sender}</Text>
                <Text>{content}</Text>
            </View>                     
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
        msgHeader: {
          paddingBottom: 5,
          fontSize: 10,
          borderBottomWidth: 1,
          borderColor: 'white',
        }
    }
)

export default Message;