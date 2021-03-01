import React,{ useState } from 'react';
import { Container, Header, Title,Icon,Button,Text,Content,Item,Input} from 'native-base';
import { View,StyleSheet,iconStyle } from 'react-native';
import database from '@react-native-firebase/database';

function RegAdmin(){
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[name,setName]=useState('');
const add_item=()=>{
let user={
    name,
    email,
    password,
  
}
database().ref('users').push(user)
alert('you have registered successfully!')
}
  
    return(


        <Container>
      
        <Content style={{marginTop:50}}>
          <Item regular>
            <Input  value={name} onChangeText={(e)=>setName(e)}  placeholder='Admin Name'/>
          </Item>
          <Item  style={{marginTop:30}} regular>
        
            <Input  value={email} onChangeText={(e)=>setEmail(e)}   placeholder='User Name'/>
          </Item>
          <Item  style={{marginTop:30}} regular>
        
        <Input  value={password} onChangeText={(e)=>setPassword(e)} secureTextEntry placeholder='Password'/>
      </Item>


          <Button onPress={add_item} style={{marginTop:50,marginLeft:110,width:150}} rounded success>
            <Text style={{paddingLeft:40}}>Sign up</Text>
          </Button>
        
        </Content>
      </Container>
     
    

    )}

    export default RegAdmin;