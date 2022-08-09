/* eslint-disable prettier/prettier */
import {View, Text, FlatList, TouchableOpacity, Modal, Pressable, TextInput} from 'react-native';
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


  const [updatedList, setUpdatedList] = useState(searchResults);

  console.log('updatedList1' + updatedList);

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
                        <Text style={styles.modalHeadText}>Filter by Year</Text>

                        <Pressable
                            style={styles.closeModalButton}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <AntDesign name={'closecircleo'} size={30} color={'#16263C'}/>
                        </Pressable>
                    </View>

                    <View style={styles.modalView}>
                        {/* <FlatList
                        data={searchResults}
                        // data={updatedList}
                        // extraData={updatedList}
                        numColumns={3}
                        showsVerticalScrollIndicator={false}
                        renderItem={({item}) =>
                            <Pressable
                                style={styles.yearButton}
                                onPress={ () => {
                                  // filterByYearAndUpdateList(item.year , searchResults, navigation);
                                  filterByYearAndUpdateList(item.year , updatedList, navigation);
                                  console.log('updatedList2' + updatedList);
                                  setModalVisible(!modalVisible);
                                  // navigation.setParams({searchResults: 'Changed'});
                                }}
                            >
                                <Text style={styles.yearButtonText}>{item.year}</Text>
                            </Pressable>
                        }
                        /> */}
                            <View style={styles.searchBar}>

                            <TextInput
                                style={styles.searchInput}
                                placeholder="ex: 2007"
                                keyboardType="numeric"
                                autoFocus={true}
                                onSubmitEditing={(value) =>
                                  {filterByYearAndUpdateList(value.nativeEvent.text, updatedList, navigation);
                                  setModalVisible(!modalVisible);}
                                }
                                >
                                {/* <Text style={styles.yearButtonText}>{item.year}</Text> */}
                            </TextInput>
                              </View>
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
        ListEmptyComponent={
          <View style={{marginVertical: '60%', marginHorizontal: 30 ,borderRadius: 15,borderColor: '#fff' , borderWidth: 1 , alignItems: 'center', justifyContent: 'center'}}> 
            <Text style={{ fontSize: 35, padding: 20, textAlign: 'center', color: '#fff'}}> No Matched Results </Text>
          </View>
        }
      />

    </View>
  );
};

export default MovieListScreen;
