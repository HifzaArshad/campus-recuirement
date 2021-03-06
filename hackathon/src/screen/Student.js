import { Container, Header, Title,Icon,Button,Text,Content,Item,Input} from 'native-base';
import { View,StyleSheet,iconStyle } from 'react-native';
import React from 'react';
function Student(props){
    return(
       
      <Container>
      
        <Content style={{marginTop:50}}>
          <Item rounded>
            <Input placeholder='Email'/>
          </Item>
          <Item  style={{marginTop:30}} rounded>
        
            <Input placeholder='Password'/>
          </Item>


          <Button onPress={()=>props.navigation.navigate('AcadmicDetail')} style={{marginTop:50,marginLeft:110,width:150}} rounded success>
            <Text style={{paddingLeft:50}}>Sign in</Text>
          </Button>
          <Text style={{marginLeft:130,marginTop:30}}>Not Registerd?</Text>
          <Button onPress={()=>props.navigation.navigate('RegStudent')}  transparent>
            <Text style={{marginLeft:100}}>Create an account </Text>
          </Button>
        </Content>
      </Container>
     
    
    )}
export default Student