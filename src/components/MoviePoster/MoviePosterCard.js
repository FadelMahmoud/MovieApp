/* eslint-disable prettier/prettier */
import {View, Text, Image, ImageBackground} from 'react-native';
import React from 'react';
import styles from './styles';

const MoviePosterCard = (props) => {

  const movie = props.movie;

//   console.log("movie" + movie )
//   console.log("props" + props )
//   console.log("item" + {item} )
  return (

    <View style={styles.container}>
        <Image
            style={styles.moviePoster}
            source={{uri:movie.posterUrl}}
        />

        <Text style={styles.movieTitle}>
            {movie.title}
         </Text>
    </View>
  );
};

export default MoviePosterCard;
