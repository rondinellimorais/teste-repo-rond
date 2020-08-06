import React from 'react';
import { Text, View } from 'react-native';

const Home = ({ params }) => {
  const name = (params) => {
    return /(+\d.*)/gmi.replace(params, "")
  }
  
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
};

export default Home;
