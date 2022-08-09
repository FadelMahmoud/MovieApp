/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import {View, Text, Image, Pressable, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import { useRoute } from '@react-navigation/native';

import movieData from '../../data/movieDB';
import MoviePreviewCard from '../../components/MoviePreview/MoviePreviewCard';

import Icon from 'react-native-vector-icons/FontAwesome5';

const FavouriteScreen = () => {

    // const route = useRoute();
    // const movie = route.params.movie;

    const [favouriteMovies, setFavouriteMovies] = useState();

    useEffect( () => {
        getData();
        console.log("inside fav")
    }, []);

    const getData = () => {
        setFavouriteMovies( movieData.movies.filter( movie => movie.favourite === true) );
      };

    return (

    <View style={styles.container} >

        <FlatList
            style={styles.movieList}
            data={favouriteMovies}
            // data={movieData.movies}
            renderItem={ ({item}) =>
            <MoviePreviewCard movie={item} />
            }
            ListEmptyComponent={
            <View style={{marginVertical: '60%', marginHorizontal: 30 ,borderRadius: 15,borderColor: '#fff' , borderWidth: 1 , alignItems: 'center', justifyContent: 'center'}}> 
                <Text style={{ fontSize: 35, padding: 20, textAlign: 'center', color: '#fff'}}> No Matched Results </Text>
            </View>
         }
        />

    </View>

  );
};

export default FavouriteScreen;
