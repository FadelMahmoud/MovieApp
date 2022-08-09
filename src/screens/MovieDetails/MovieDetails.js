/* eslint-disable prettier/prettier */
import {View, Text, Image, Pressable, FlatList, Alert} from 'react-native';
import React from 'react';
import styles from './styles';
import { useRoute } from '@react-navigation/native';

import FavouriteIcon from '../../components/FavouriteIcon/FavouriteIcon';

const MovieDetailsScreen = () => {

    const route = useRoute();
    const movie = route.params.movie;

    return (

    <View style={styles.container} >

        <Image
            style={styles.moviePoster}
            source={{uri:movie.posterUrl}}
        />

        <View style={styles.favouriteIconView}>
            <FavouriteIcon movie={movie} />
        </View>

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

        <View>
            <FlatList
                style={styles.genreList}
                horizontal
                data={movie.genres}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) =>
                    <Pressable style={styles.genreButton}>
                        <Text style={styles.genreButtonText}>{item}</Text>
                    </Pressable>
                }
            />
        </View>

        <View style={styles.directorView}>

            <Text style={styles.directorText}>Director(s) : </Text>

            <Text style={styles.directorName}> {movie.director} </Text>
        </View>

        <View style={styles.descriptionView}>
            <Text style={styles.descriptionText}>Description : </Text>

            <Text style={styles.movieDescription}>
                {movie.plot}
            </Text>
        </View>

    </View>

  );
};

export default MovieDetailsScreen;
