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

    // console.log('text' + text);
    const searchResults = movieData.movies.filter( movie =>
        movie.title.toLowerCase() === text.toLowerCase() || movie.actors.includes(text));

    // console.log('searchResults' + searchResults.length);
    // console.log('searchResults[0]' + searchResults[0].title);
    // if (searchResults.length > 1) {console.log('searchResults[1]' + searchResults[1].title);}

    navigation.navigate('MovieListScreen' , { message: 'Movie / Actor' , searchResults: searchResults } );
};

const filterByGenreAndNavigate = (item, navigation) => {

    console.log('item' + item);
    const searchResults = movieData.movies.filter( movie => movie.genres.includes(item) );

    // // console.log('searchResults' + searchResults.length);
    // // console.log('searchResults[0]' + searchResults[0]);

    navigation.navigate('MovieListScreen' , { message: item + ' Genre' , searchResults: searchResults } );
};

const HomeScreen = () => {

  const navigation = useNavigation();

  const [ modalVisible, setModalVisible ] = useState(false);

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
                    onSubmitEditing={(value) => findSearchResultsAndNavigate(value.nativeEvent.text , navigation)}
                />

                <Icon name={'search'} size={23} color={'#16263C'}/>
            </View>

            <TouchableOpacity
                style={styles.categoryFilterView}
                onPress={ () => { setModalVisible(!modalVisible); }}
            >
                <MaterialCommunityIcons  name={'filter-menu'} size={25} color={'#E82351'}/>
                <Text>Filter</Text>
            </TouchableOpacity>

            {/* Category Filter Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => { setModalVisible(!modalVisible); }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalHead}>
                        <Text style={styles.modalHeadText}>Select your genre</Text>

                        <Pressable
                            style={styles.closeModalButton}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <AntDesign name={'closecircleo'} size={30} color={'#16263C'}/>
                        </Pressable>
                    </View>

                    <View style={styles.modalView}>
                        <FlatList
                        data={movieData.genres}
                        numColumns={3}
                        showsVerticalScrollIndicator={false}
                        renderItem={({item}) =>
                            <Pressable
                                style={styles.genreButton}
                                onPress={ () => filterByGenreAndNavigate(item , navigation) }
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
