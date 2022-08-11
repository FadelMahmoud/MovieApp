/* eslint-disable prettier/prettier */
import {Pressable} from 'react-native';
import React from 'react';
import styles from './styles';

import AntDesign from 'react-native-vector-icons/AntDesign';

// import Async local storage to get and set favourite movies locally on the device
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch} from 'react-redux';
import {setMovies} from '../../redux/actions';

const FavouriteIcon = (props) => {

// import local storage favourite movies
  const { movies } = useSelector( state => state.taskReducer);
  const dispatch = useDispatch();

// this is the movie object sent to screen ( different from local storage favourite movies )
  const movie = props.movie;

  const changeMovieFavouriteState = (FavouriteMovie) => {

      try {
// Search if this movie includes in local storage favourite movies
        const index = movies.findIndex( SingleMovie => SingleMovie.id === FavouriteMovie.id );

        let newMovies = [];

        if ( index > -1 )
        {
          // If movie is in local storage favourite movies

          newMovies = [...movies]; // Take copy from local storage favourite movies list
          newMovies[index].favourite = !(newMovies[index].favourite); // Change movie favourite state

        } else {
          // Create new movie object and save assign selected movie details to this object
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

            newMovies = [...movies, Movie]; // Add movie to favourite movies list

          }

        //  Add movie to "local storage" favourite movies list
        AsyncStorage.setItem('Movies', JSON.stringify(newMovies))
        .then(() => {
          dispatch(setMovies(newMovies));
        })
        .catch( err => console.log(err));
      } catch (error) {
          console.log(error);
      }

  };


  return (

    <Pressable style={styles.favouriteIcon}>
      <AntDesign
        name={'heart'}
        size={35}

        // change icon color based on movie's favourite state
        color={
          movies.find(
            SingleMovie =>
              SingleMovie.id === movie.id && SingleMovie.favourite === true,
          ) ?
            '#E82351' : '#e8e8e8'
        }

        onPress={() => changeMovieFavouriteState(movie)}
      />
    </Pressable>
  );
};

export default FavouriteIcon;
