import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { useDispatch } from 'react-redux'

import { Creators as FruitsActions } from '../../store/ducks/fruits'

const Home = ({ navigation }) => {
  const dispatch = useDispatch()

  const addFruit = () => {
    dispatch(FruitsActions.addFruit())
  }

  return (
    <View justifyContent="center" alignItems="center" flex={1}>
      <TouchableOpacity onPress={() => navigation.push('Fruits')}>
        <Text>Visualize your fruits</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => addFruit()} style={{ marginTop: 40 }}>
        <Text>Add a new fruit</Text>
      </TouchableOpacity>  
    </View>
  );
}

export default Home;