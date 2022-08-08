/* eslint-disable prettier/prettier */
import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';

import { useNavigation } from '@react-navigation/native';

const MoviePosterCard = (props) => {

  const movie = props.movie;

  const navigation = useNavigation();
  
//   console.log("movie" + movie )
//   console.log("props" + props )
//   console.log("item" + {item} )
  return (

    <Pressable
      style={styles.container}
      onPress={ () => navigation.navigate('MovieDetailsScreen' , { movie: movie} )}
    >
        <Image
            style={styles.moviePoster}
            source={{uri:movie.posterUrl}}
        />

        <Text style={styles.movieTitle}>
            {movie.title}
         </Text>
    </Pressable>
  );
};

export default MoviePosterCard;
