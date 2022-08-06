/* eslint-disable prettier/prettier */
import {View, Text, Image, TextInput, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';

import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import movieData from '../../data/movieDB';
import MoviePosterCard from '../../components/MoviePoster/MoviePosterCard';


const HomeScreen = () => {

  return (

    <View style={styles.Container}>

            {/* Header Row */}
        <View style={styles.headerView}>

            <Image
                style={styles.userImage}
                source={require('../../assets/userImage.jpg') }
            />

            <View style={styles.welcomeTextView}>
                <Text style={styles.helloText}>
                    Hello
                </Text>

                <Text style={styles.userName}>
                    Fadel
                </Text>
            </View>
        </View>

            {/* Search Row */}
        <View style={styles.searchView}>

            <View style={styles.searchBar}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search by Movie or Actor"
                />

                <Icon name={'search'} size={23} color={'#16263C'}/>
            </View>

            <TouchableOpacity
                style={styles.categoryFilterView}
            >
                <MaterialCommunityIcons  name={'filter-menu'} size={25} color={'#E82351'}/>
                <Text>Filter</Text>
            </TouchableOpacity>

        </View>

            {/* Upcoming Movies Row */}
        <View style={styles.MoviesListView}>
            <Text style={styles.MoviesListViewText}>Upcoming Movies</Text>

            <FlatList
                horizontal
                data={movieData.movies}
                renderItem={({item}) =>
                    <MoviePosterCard movie={item}/>
                }
            />
        </View>

            {/* Popular Movies Row */}
        <View style={styles.MoviesListView}>
            <Text style={styles.MoviesListViewText}>Upcoming Movies</Text>

            <FlatList
                horizontal
                data={movieData.movies}
                renderItem={({item}) =>
                    <MoviePosterCard movie={item}/>
                }
            />
        </View>


    </View>
  );
};

export default HomeScreen;
