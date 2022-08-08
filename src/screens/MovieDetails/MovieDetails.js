/* eslint-disable prettier/prettier */
import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import { useRoute } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome5';

const MovieDetailsScreen = () => {

    const route = useRoute();
    const movie = route.params.movie;

    return (

    <View style={styles.container} >

        <Image
            style={styles.moviePoster}
            source={{uri:movie.posterUrl}}
        />

        <Pressable style={styles.favouriteIcon}>
            <Icon
                name={'heart'} size={30} color={'#e8e8e8'}
            />
        </Pressable>

        <Text style={styles.movieTitle}>
                {movie.title}
        </Text>

        <View style={styles.movieRunTimeAndYearView}>
            <Text style={styles.movieRunTime}>
                {movie.runtime} mins
            </Text>

            <Text style={styles.movieYear}>
                {movie.year}
            </Text>
        </View>

        <Text style={styles.movieDescriptionText}>
            {movie.plot}
        </Text>

    </View>

  );
};

export default MovieDetailsScreen;
