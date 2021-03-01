import React, { Component,useState} from 'react';
import { Container, Header, Title,Icon,Button,Text,Content,Item,Input} from 'native-base';
import { View,StyleSheet,iconStyle } from 'react-native';
import auth from '@react-native-firebase/auth';
import app from '@react-native-firebase/app'
import ProjectInfo from './Info';
function Admin(props){

  const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
   
    const signin=()=> {
     
    let user={
          email,
          password,
        
      }
      console.log(user)

 
    }
       
    return(
       
      <Container>
      
        <Content style={{marginTop:50}}>
          <Item rounded>
            <Input value={email} onChangeText={(e)=>setEmail(e)}  placeholder='Email'/>
          </Item>
          <Item  style={{marginTop:30}} rounded>
        
            <Input value={password} onChangeText={(e)=>setPassword(e)}t secureTextEntry placeholder='Password'/>
          </Item>


          <Button onPress={()=>props.navigation.navigate('ProjectInfo')} style={{marginTop:50,marginLeft:110,width:150}} rounded success>
            <Text style={{paddingLeft:50}}>Sign in</Text>
          </Button>
          <Text style={{marginLeft:130,marginTop:30}}>Not Registerd?</Text>
          <Button onPress={()=>props.navigation.navigate('RegAdmin')}  transparent>
            <Text style={{marginLeft:100}}>Create an account </Text>
          </Button>
        </Content>
      </Container>
     
    
    )}
export default Admin