/* eslint-disable no-lone-blocks */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import {View, Text, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';

// import Async local storage to get and set favourite movies locally on the device
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from 'react-redux';
import { setMovies } from '../../redux/actions';

import MoviePreviewCard from '../../components/MoviePreview/MoviePreviewCard';


const FavouriteScreen = () => {

// import local storage favourite movies
    const { movies } = useSelector( state => state.taskReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        getLocalFavouriteMovies();
      }, );

      const getLocalFavouriteMovies = () => {
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

// Main container
    <View style={styles.container} >

        <FlatList
            style={styles.movieList}
            data={movies.filter( movie => movie.favourite === true )}

            renderItem={ ({item}) =>
              <MoviePreviewCard movie={item} />
            }

            ListEmptyComponent={
              <View style={styles.emptyListView}>
                  <Text style={styles.emptyListText}>
                    No Favourite Movie Selected
                  </Text>
              </View>
            }
        />

    </View>

  );
};

export default FavouriteScreen;
