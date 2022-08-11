/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable prettier/prettier */
import {View, Text, Image, TextInput, Pressable, TouchableOpacity, FlatList, Modal} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import movieData from '../../data/movieDB';
import MoviePosterCard from '../../components/MoviePoster/MoviePosterCard';


const findSearchResultsAndNavigate = (text, navigation) => {

// Search if text input includes in movie title OR actor name
    const searchResults = movieData.movies.filter( movie =>
        movie.title.toLowerCase().includes( text.toLowerCase() ) || movie.actors.toLowerCase().includes( text.toLowerCase() ) );

// Navigate to MovieListScreen to show text input & search results
    navigation.navigate('MovieListScreen' , { message: text , searchResults: searchResults } );

};

const filterByGenreAndNavigate = (item, navigation) => {

// Filter movies based on genre
    const searchResults = movieData.movies.filter( movie => movie.genres.includes(item) );

    // Navigate to MovieListScreen to show searched genre & search results
    navigation.navigate('MovieListScreen' , { message: item + ' Genre' , searchResults: searchResults } );

};

const HomeScreen = () => {

  const navigation = useNavigation();

  const [ modalVisible, setModalVisible ] = useState(false);


  return (

// Main container
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
                    onSubmitEditing={(value) => findSearchResultsAndNavigate(value.nativeEvent.text , navigation)}
                />

                <Icon name={'search'} size={23} color={'#16263C'}/>
            </View>

            <TouchableOpacity
                style={styles.genreFilterView}
                onPress={ () => { setModalVisible(!modalVisible); }}
            >
                <MaterialCommunityIcons  name={'filter-menu'} size={25} color={'#E82351'}/>
                <Text>Filter</Text>
            </TouchableOpacity>

            {/* Genre Filter Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => { setModalVisible(!modalVisible); }}
            >
                 <View style={styles.centeredView}>

                    {/* Modal head */}
                    <View style={styles.modalHead}>
                        <Text style={styles.modalHeadText}>Select your genre</Text>

                        <Pressable
                            style={styles.closeModalButton}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <AntDesign name={'closecircleo'} size={30} color={'#16263C'}/>
                        </Pressable>
                    </View>

                    {/* Main Modal View */}
                    <View style={styles.modalView}>
                        <FlatList
                            data={movieData.genres}
                            numColumns={3}
                            showsVerticalScrollIndicator={false}

                            renderItem={({item}) =>
                                <Pressable
                                    style={styles.genreButton}
                                    onPress={ () => {
                                        filterByGenreAndNavigate(item , navigation);
                                        setModalVisible(!modalVisible);
                                    }}
                                >
                                    <Text style={styles.genreButtonText}>{item}</Text>
                                </Pressable>
                            }
                        />
                    </View>
                </View>
            </Modal>

        </View>

            {/* Upcoming Movies Row */}
        <View style={styles.MoviesListView}>
            <Text style={styles.MoviesListViewText}>Upcoming Movies</Text>

            <FlatList
                horizontal
                // Upcoming movies assumed to be last 33 movies in the database
                data={movieData.movies.filter( movie => movie.id > movieData.movies.length - 33 ) }

                renderItem={({item}) =>
                    <MoviePosterCard movie={item}/>
                }
            />
        </View>

            {/* Popular Movies Row */}
        <View style={styles.MoviesListView}>
            <Text style={styles.MoviesListViewText}>Popular Movies</Text>

            <FlatList
                horizontal
                // Popular movies assumed to be first 14 movies in the database
                data={movieData.movies.filter( movie => movie.id < 15 ) }

                renderItem={({item}) =>
                    <MoviePosterCard movie={item}/>
                }
            />
        </View>

    </View>
  );
};

export default HomeScreen;
