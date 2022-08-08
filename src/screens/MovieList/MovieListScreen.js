/* eslint-disable prettier/prettier */
import {View, Text, FlatList, TouchableOpacity, Modal, Pressable} from 'react-native';
import React , {useState} from 'react';
import { useRoute } from '@react-navigation/native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import MoviePreviewCard from '../../components/MoviePreview/MoviePreviewCard';


const filterByYearAndUpdateList = (year, results , navigation) => {

  console.log('year' + year);
  console.log('results' + results);
  console.log('results[0].title' + results[0].title);

  const updatedSearchResults = results.filter( movie => movie.year === year);

  console.log('searchResults' + updatedSearchResults.length);
  if (updatedSearchResults.length > 0) {console.log('searchResults[0].title' + updatedSearchResults[0].title);}

  navigation.setParams({searchResults: updatedSearchResults});

  // if (searchResults.length > 0)
  //     {navigation.navigate('MovieListScreen' , { message: item + ' Genre' , searchResults: searchResults } );}
  // else {Alert.alert('No Results', 'Try another search');}

};

const MovieListScreen = () => {

  const navigation = useNavigation();

  const route = useRoute();
  const [ modalVisible, setModalVisible ] = useState(false);

  // const {message, searchResults} = route.params;
  const message = route.params.message;
  const searchResults = route.params.searchResults;

  // const [updatedList, setUpdatedList] = useState();

  return (
    <View style={styles.Container}>

          <View style={styles.headerView}>

              <View style={styles.headerTextView}>
                <Text style={styles.headerResultText}>
                  Search Results for
                </Text>

                <Text style={styles.headerMessage}>
                  {message}
                </Text>
              </View>

              <TouchableOpacity
                style={styles.yearFilterView}
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
                        data={searchResults}
                        numColumns={3}
                        showsVerticalScrollIndicator={false}
                        renderItem={({item}) =>
                            <Pressable
                                style={styles.yearButton}
                                onPress={ () => {
                                  filterByYearAndUpdateList(item.year , searchResults, navigation);
                                  setModalVisible(!modalVisible);
                                  // navigation.setParams({searchResults: 'Changed'});
                                }}
                            >
                                <Text style={styles.yearButtonText}>{item.year}</Text>
                            </Pressable>
                        }
                        />
                    </View>
                </View>
            </Modal>

          </View>

            {/*
      <Text>{searchResults[0].title}</Text>
      <Text>{searchResults[0].actors}</Text> */}

      <FlatList
        style={styles.movieList}
        data={searchResults}
        renderItem={ ({item}) =>
          <MoviePreviewCard movie={item} />
        }
      />

    </View>
  );
};

export default MovieListScreen;
