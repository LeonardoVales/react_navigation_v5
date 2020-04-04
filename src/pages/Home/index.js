import React from 'react';
import { Text, Button, View } from 'react-native';

// import { Container } from './styles';

export default function Home( {navigation}) {

  function navigateToUsers() {
    navigation.navigate('Users');
  }


  return (
    <View>
        <Text>Home</Text>
        <Button title="Navigate to Users" onPress={navigateToUsers} />
    </View>
    
  );
}
