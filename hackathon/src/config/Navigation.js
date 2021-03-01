import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,  } from '@react-navigation/stack';
import HomeScreen  from '../screen/Home';
import Admin from '../screen/Admin';
import RegAdmin from '../screen/RegAdmin'
import Student from '../screen/Student';
import RegStudent from '../screen/RegStudent';
import Company from '../screen/Comapny';
import RegComapny from '../screen/RegComapny';
import AcadmicDetail from '../screen/Acadmic';
import UploadJobs from '../screen/UploadJobs';
import ProjectInfo from '../screen/Info';
const Stack = createStackNavigator();

function Navigate() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator >
   


      <Stack.Screen name="Home" component={HomeScreen} 
         options={{
        
        headerStyle: {
          backgroundColor: '#4169E1',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          
         fontWeight:'normal'
        },
      }}  />
  
      <Stack.Screen name="RegCompany" component={RegComapny} 
         options={{
        
        headerStyle: {
          backgroundColor: '#4169E1',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          
         fontWeight:'normal'
        },
      }}  />
      

      
      <Stack.Screen name="Company" component={Company} 
         options={{
        
        headerStyle: {
          backgroundColor: '#4169E1',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          
         fontWeight:'normal'
        },
      }}  />
      <Stack.Screen name="UploadJobs" component={UploadJobs} 
         options={{
        
        headerStyle: {
          backgroundColor: '#4169E1',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          
         fontWeight:'normal'
        },
      }}  />
      
<Stack.Screen name="Student" component={Student} 
         options={{
        
        headerStyle: {
          backgroundColor: '#4169E1',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          
         fontWeight:'normal'
        },
      }}  />
          


      
<Stack.Screen name="RegStudent" component={RegStudent} 
         options={{
        
        headerStyle: {
          backgroundColor: '#4169E1',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          
         fontWeight:'normal'
        },
        
      }}  />
      <Stack.Screen name="AcadmicDetail" component={AcadmicDetail} 
         options={{
        
        headerStyle: {
          backgroundColor: '#4169E1',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          
         fontWeight:'normal'
        },
      }}  />
      <Stack.Screen name="Admin" component={Admin} 
         options={{
        
        headerStyle: {
          backgroundColor: '#4169E1',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          
         fontWeight:'normal'
        },
      }}  />



      <Stack.Screen name="RegAdmin" component={RegAdmin} 
         options={{
        
        headerStyle: {
          backgroundColor: '#4169E1',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          
         fontWeight:'normal'
        },
      }}  />
      

      <Stack.Screen name="ProjectInfo" component={ProjectInfo} 
         options={{
        
        headerStyle: {
          backgroundColor: '#4169E1',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          
         fontWeight:'normal'
        },
      }}  />
      
       
       
      </Stack.Navigator>
     
    </NavigationContainer>
  );
}
// screenOptions={{headerShown:'', headerTitleAlign: 'center',}} 

export default Navigate;