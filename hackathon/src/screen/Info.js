import React, { Component } from 'react';
import { Container, Header, Content, Button, Text,Icon } from 'native-base';
 class ProjectInfo extends Component {
  render() {
    return (
      <Container  >
     
        <Content >
        
          <Button style={{width:300,marginTop:50,marginLeft:25}}  danger>
       
            <Text>Vacancy Request:3</Text>
            <Icon name='trash' />
          </Button>
          <Button style={{width:300,marginTop:50,marginLeft:25}}  info>
            <Text>Student lists</Text>
            <Icon name='trash' />
          </Button>
        </Content>
      </Container>
    );
  }
}

export default ProjectInfo