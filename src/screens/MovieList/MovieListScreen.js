/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';

const MovieListScreen = () => {

  const route = useRoute();

  // const {message, searchResults} = route.params;
  const message = route.params.message;
  const searchResults = route.params.searchResults;

  return (
    <View>
      <Text>Search results for {message} </Text>
      <Text>{searchResults[0].title}</Text>
      <Text>{searchResults[0].actors}</Text>
    </View>
  );
};

export default MovieListScreen;
