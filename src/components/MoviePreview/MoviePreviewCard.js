/* eslint-disable prettier/prettier */
import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';

import { useNavigation } from '@react-navigation/native';

import FavouriteIcon from '../FavouriteIcon/FavouriteIcon';


const MoviePreview = (props) => {

// Receive movie information
  const movie = props.movie;

  const navigation = useNavigation();


  return (

    <Pressable
      style={styles.container}
      onPress={ () => navigation.navigate('MovieDetailsScreen' , { movie: movie } )}
    >

        {/* Movie poster, favourite icon & runtime Row */}
        <Image
            style={styles.moviePoster}
            source={{uri:movie.posterUrl}}
        />

        <FavouriteIcon movie={movie} />

        <Text style={styles.movieRunTime}>
            {movie.runtime} mins
        </Text>

        {/* Movie title & year Row */}
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

        {/* Movie little description Row */}
        <Text
          numberOfLines={2}
          style={styles.movieDescriptionText}>
            {movie.plot}
        </Text>

    </Pressable>

  );
};

export default MoviePreview;
