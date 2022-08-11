/* eslint-disable prettier/prettier */
import {View, Text, Image, Pressable, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';

import { useRoute } from '@react-navigation/native';

import FavouriteIcon from '../../components/FavouriteIcon/FavouriteIcon';


const MovieDetailsScreen = () => {

    const route = useRoute();
    const movie = route.params.movie;


    return (

// Main container
    <View style={styles.container} >

{/* Movie Poster with title and favourite icon */}
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
{/* movie run time & year view */}
        <View style={styles.movieRunTimeAndYearView}>
            <Text style={styles.movieRunTime}>
                {movie.runtime} mins ,
            </Text>

            <Text style={styles.movieYear}>
                {movie.year}
            </Text>
        </View>

{/* movie genre list view */}
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

{/* movie director view*/}
        <View style={styles.directorView}>
            <Text style={styles.directorText}>
                Director(s) :
            </Text>

            <Text style={styles.directorName}>
                {movie.director}
            </Text>
        </View>

{/* movie description view*/}
        <View style={styles.descriptionView}>
            <Text style={styles.descriptionText}>
                Description :
            </Text>

            <Text style={styles.movieDescription}>
                {movie.plot}
            </Text>
        </View>

{/* movie actors view*/}
        <View style={styles.actorsView}>
            <Text style={styles.actorsText}>
                Actors :
            </Text>

            <Text style={styles.movieActors}>
                {movie.actors}
            </Text>
        </View>

    </View>

  );
};

export default MovieDetailsScreen;
