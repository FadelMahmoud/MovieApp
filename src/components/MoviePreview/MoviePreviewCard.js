/* eslint-disable prettier/prettier */
import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome5';

const MoviePreview = (props) => {

  const movie = props.movie;

  const navigation = useNavigation();

  return (

    <Pressable 
      style={styles.container}
      onPress={ () => navigation.navigate('MovieDetailsScreen' , { movie: movie } )}
    >
        <Image
            style={styles.moviePoster}
            source={{uri:movie.posterUrl}}
        />

        <Pressable style={styles.favouriteIcon}>
            <Icon
            name={'heart'} size={30} color={'#e8e8e8'}
            />
        </Pressable>

        <Text style={styles.movieRunTime}>
            {movie.runtime} mins
        </Text>

        <View style={styles.movieTitleAndYearView}>
          <Text 
            numberOfLines={2}
            style={styles.movieTitle}>
            {movie.title}
          </Text>

          <Text style={styles.movieYear}>
            {movie.year}
          </Text>
        </View>

        <Text
          numberOfLines={2}
          style={styles.movieDescriptionText}>
            {movie.plot}
        </Text>

    </Pressable>

  );
};

export default MoviePreview;
