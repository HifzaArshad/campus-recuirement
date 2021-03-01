import React, { Component } from 'react';
import { Container, Header, Title,Icon,Button,Text,Content,Item,Input} from 'native-base';
import { View,StyleSheet,iconStyle } from 'react-native';

function AcadmicDetail(){
    return(


        <Container>
      
        <Content style={{marginTop:50}}>
          <Item regular>
            <Input placeholder='Name'/>
          </Item>
          <Item  style={{marginTop:30}} regular>
        
            <Input  placeholder='Gender'/>
          </Item>
          <Item  style={{marginTop:30}} regular>
        
        <Input placeholder='Age'/>
      </Item>
      <Item  style={{marginTop:30}} regular>
        
        <Input placeholder='Education'/>
      </Item>
      <Item  style={{marginTop:30}} regular>
        
        <Input placeholder='Year of Education'/>
      </Item>
      <Item  style={{marginTop:30}} regular>
        
        <Input placeholder='Institue Name'/>
      </Item>

      <Item  style={{marginTop:30}} regular>
        
        <Input placeholder='Department'/>
      </Item>
          <Button style={{marginTop:50,marginLeft:110,width:150,marginBottom:30}} rounded success>
            <Text style={{paddingLeft:40}}>Submit</Text>
          </Button>
        
        </Content>
      </Container>
     
    

    )}

    export default AcadmicDetail;