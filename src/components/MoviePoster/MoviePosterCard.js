/* eslint-disable prettier/prettier */
import {Image, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';

import { useNavigation } from '@react-navigation/native';


const MoviePosterCard = (props) => {

  // Receive movie information
  const movie = props.movie;

  const navigation = useNavigation();


  return (

    <Pressable
      style={styles.container}
      onPress={ () => navigation.navigate('MovieDetailsScreen' , { movie: movie} )}
    >
        <Image
            style={styles.moviePoster}
            source={{uri:movie.posterUrl}}
        />
    </Pressable>
  );
};

export default MoviePosterCard;
