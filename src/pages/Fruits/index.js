import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { useSelector } from 'react-redux'

const Fruits = () => {
  const fruits = useSelector(state => state.fruits)

  return (
    <View justifyContent="center" alignItems="center" flex={1}>
      {fruits.map(fruit => (
        <Text key={fruit}>{fruit}</Text>
      ))}
    </View>
  );
}

export default Fruits;