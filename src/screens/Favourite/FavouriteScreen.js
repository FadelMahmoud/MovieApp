/* eslint-disable no-lone-blocks */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import {View, Text, Image, Pressable, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import { useRoute } from '@react-navigation/native';

import movieData from '../../data/movieDB';
import MoviePreviewCard from '../../components/MoviePreview/MoviePreviewCard';

import Icon from 'react-native-vector-icons/FontAwesome5';


import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from 'react-redux';
import { setMovies, setMovieId } from '../../redux/actions';
import taskReducer from '../../redux/reducers';

const FavouriteScreen = () => {

    // const route = useRoute();
    // const movie = route.params.movie;

    const [favouriteMovies, setFavouriteMovies] = useState();

    const { movies } = useSelector( state => state.taskReducer);
    const dispatch = useDispatch();

    // useEffect( () => {
    //     navigation.addListener('focus', () => {
    //       getTask();
    //     });
    //   }, [] );

    useEffect(() => {
        getData();
      }, );

      const getData = () => {
        AsyncStorage.getItem('Movies')
          .then( movies => { {
              const parsedMovies = JSON.parse(movies);
              if ( parsedMovies && typeof parsedMovies === 'object'){
                  dispatch( setMovies( parsedMovies ));
              }
            }
          })
          .catch(err =>  console.log(err));

      };

    return (

    <View style={styles.container} >

        <FlatList
            style={styles.movieList}
            // data={favouriteMovies}
            data={movies.filter( movie => movie.favourite === true )}
            // data={movieData.movies}
            renderItem={ ({item}) =>
            <MoviePreviewCard movie={item} />
            }
            ListEmptyComponent={
            <View style={{marginVertical: '60%', marginHorizontal: 30 ,borderRadius: 15,borderColor: '#fff' , borderWidth: 1 , alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{ fontSize: 35, padding: 20, textAlign: 'center', color: '#fff'}}> No Favourite Movie Selected </Text>
            </View>
         }
        />

    </View>

  );
};

export default FavouriteScreen;
