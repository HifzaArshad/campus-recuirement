import React, { Component } from 'react';
 import { Container, Header, Title, Left, Right, Body, Icon,Text ,Button,Content,} from 'native-base';
 import { View,StyleSheet,iconStyle,TouchableOpacity } from 'react-native';
 



 function HomeScreen (props)  {

  
  return (
 
    <Container>
         


      <Button style={{marginTop:60,marginLeft:120}} onPress={()=>props.navigation.navigate('Admin')}   rounded success>
      <Text>admin login</Text>
     </Button>


    
     <Button style={{marginTop:50,marginLeft:110}} onPress={()=>props.navigation.navigate('Student')} rounded success>
      <Text>student login</Text>
     </Button>
    

     <Button style={{marginLeft:110,marginTop:50}} onPress={()=>props.navigation.navigate('Company')}  rounded success>
      <Text>company login</Text>
     </Button>

    
     <Button style={{marginLeft:110,marginTop:50}} rounded success>
       <Text>view students</Text>
     </Button>
  
     <Button style={{marginLeft:100,marginTop:50}} rounded success>
       <Text>company vacancy</Text>
     </Button>

               </Container>


    );
  }





// function HomeScreen() {
  
//     return (
//         <View  >

//           <View style={styles.button} >
//           <Button  rounded info>
//             <Text>Admin login</Text>
//           </Button>
        

//           {/* onPress={()=>props.navigation.navigate('Admin')} */}

//           <Button     style={styles.std} rounded info>
//             <Text>Student login</Text>
//           </Button>

//           <Button style={{marginTop:20}} rounded info>
//             <Text>company login</Text>
//           </Button>

//           <Button style={styles.std} rounded info>
//             <Text>view Students </Text>
//           </Button>

//           <Button style={{marginTop:20}} rounded info>
//             <Text>company vacancy</Text>
//           </Button>


//           </View>

//         </View>
    
    
//     );
  
// }

const styles = StyleSheet.create({
    container: {
      
    },
    
  button:{
      marginTop:100,
    
  },
  std:{
      marginLeft:210,
      width:150
  }

})





  export default HomeScreen;