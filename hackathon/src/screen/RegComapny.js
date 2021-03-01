import React, { Component } from 'react';
import { Container, Header, Title,Icon,Button,Text,Content,Item,Input} from 'native-base';
import { View,StyleSheet,iconStyle } from 'react-native';
import {Form,Switch,Slider,Picker,DatePickerIOS,TextInput,PickerIOS} from 'react-native-form';
function RegStudent(){
    return(
     
 
    
      <Container >
      
      <Content style={{marginTop:50}}>
        <Item rounded>
          <Input placeholder='Comapny Name'/>
        </Item>
        <Item  style={{marginTop:30}} rounded>
      
          <Input placeholder='Job Title'/>
        </Item>
        <Item  style={{marginTop:30}} rounded>
      
      <Input placeholder=''/>
    </Item>
    <Item  style={{marginTop:30}} rounded>
      
      <Input placeholder='Requirements'/>
    </Item>
    <Item  style={{marginTop:30}} rounded>
      
      <Input placeholder='Year'/>
    </Item>
    <Item  style={{marginTop:30}} rounded>
      
      <Input placeholder='Email'/>
    </Item>
    <Item  style={{marginTop:30}} rounded>
      
      <Input placeholder='Password'/>
    </Item>


        <Button style={{marginTop:50,marginLeft:110,width:150,marginBottom:30}} rounded success>
          <Text style={{paddingLeft:50}}>Sign in</Text>
        </Button>

       
      </Content>
    </Container>
     
    )}

    export default RegStudent;