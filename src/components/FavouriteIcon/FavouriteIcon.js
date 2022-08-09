/* eslint-disable prettier/prettier */
import {Pressable, Alert} from 'react-native';
import React from 'react';
import styles from './styles';

import AntDesign from 'react-native-vector-icons/AntDesign';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch} from 'react-redux';
import {setMovies} from '../../redux/actions';

const FavouriteIcon = (props) => {

    const { movies } = useSelector( state => state.taskReducer);
    const dispatch = useDispatch();

    const movie = props.movie;

    const changeMovieFavouriteState = (FavouriteMovie) => {

        try {
  
          const index = movies.findIndex( SingleMovie => SingleMovie.id === FavouriteMovie.id );
          console.log('index' + index );
          let newMovies = [];
  
          if ( index > -1 )
          {
            newMovies = [...movies];
            // newMovies[index] = Movie;
            newMovies[index].favourite = !(newMovies[index].favourite);
            console.log('newMovies[index].title' + newMovies[index].title );
            console.log('newMovies[index].favourite' + newMovies[index].favourite );
          } else {
              var Movie = {
              id : FavouriteMovie.id ,
              title : FavouriteMovie.title,
              plot : FavouriteMovie.plot,
              favourite: true,
              posterUrl : FavouriteMovie.posterUrl,
              year: FavouriteMovie.year,
              runtime: FavouriteMovie.runtime,
              genres: FavouriteMovie.genres,
              director: FavouriteMovie.director,
              actors: FavouriteMovie.actors,
              };
  
              newMovies = [...movies, Movie];
              console.log('Movie.title' + Movie.title );
              console.log('Movie.favourite' + Movie.favourite );
            }
  
  
          // if ( index > -1 )
          // {
          //   newMovies = [...movies];
          //   newMovies[index] = Movie;
          // } 
          // else
          // {
          //   newMovies = [...movies, Movie];
          // }
  
          AsyncStorage.setItem('Movies', JSON.stringify(newMovies))
          .then(() => {
            dispatch(setMovies(newMovies));
  
            // Alert.alert('Success!!!', 'Movie saved to Favourite successfully');
            Alert.alert('Success', "Movie's Favourite state changed");
            // navigation.goBack();
          })
          .catch ( err => console.log(err));
        } catch (error) {
            console.log(error);
        }
  
    };

  return (
    <Pressable style={styles.favouriteIcon}>
      <AntDesign
        name={'heart'}
        size={35}
        color={
          movies.find(
            SingleMovie =>
              SingleMovie.id === movie.id && SingleMovie.favourite === true,
          )
            ? '#E82351'
            : '#e8e8e8'
        }
        onPress={() => changeMovieFavouriteState(movie)}
      />
    </Pressable>
  );
};

export default FavouriteIcon;
