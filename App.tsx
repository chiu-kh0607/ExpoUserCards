import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import React from 'react';
import { Result } from './type/types';
import UserList from './component/UserList';
import { getUser } from './api/getUser';
import { styles } from './css/styles';


export default function App() { 
  const[result, setResult]=useState<Result[]>([]);
  const{pushUsers} = getUser();
  //fetch user when no record found
  if(result.length==0)
    pushUsers(result,setResult);
  return (
    <View style={styles.container}>
      <UserList  
        users={result}/>
      <StatusBar style="auto" />
    </View>
  );
}