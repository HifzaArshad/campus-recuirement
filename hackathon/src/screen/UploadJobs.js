import React, { Component } from 'react';
import { Container, Header, Title,Icon,Button,Text,Content,Item,Input} from 'native-base';
import { View,StyleSheet,iconStyle } from 'react-native';

function UploadJobs(){
    return(


        <Container>
      
        <Content style={{marginTop:50}}>
          <Item regular>
            <Input placeholder='Job Title'/>
          </Item>
          <Item  style={{marginTop:30}} regular>
        
            <Input  placeholder='Job Location'/>
          </Item>
          <Item  style={{marginTop:30}} regular>
        
        <Input placeholder='Job Requirements'/>
      </Item>
      <Item  style={{marginTop:30}} regular>
        
        <Input placeholder='Salary'/>
      </Item>
      <Item  style={{marginTop:30}} regular>
        
        <Input placeholder='Benefits'/>
      </Item>
      <Item  style={{marginTop:30}} regular>
        
        <Input placeholder='Job Description'/>
      </Item>

          <Button style={{marginTop:50,marginLeft:110,width:150,marginBottom:30}} rounded success>
            <Text style={{paddingLeft:50}}>Upload</Text>
          </Button>
        
        </Content>
      </Container>
     
    

    )}

    export default UploadJobs;