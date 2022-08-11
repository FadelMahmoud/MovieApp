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

// Filter movies based on released year
  const updatedSearchResults = results.filter( movie => movie.year === year);

    // update screen search results params
  navigation.setParams({searchResults: updatedSearchResults});

};


const MovieListScreen = () => {

  const navigation = useNavigation();

  const route = useRoute();
  const [ modalVisible, setModalVisible ] = useState(false);

  const message = route.params.message;
  const searchResults = route.params.searchResults;

  // useState variable to save screen params & used to filter data from it based on year search
  const [updatedList, setUpdatedList] = useState(searchResults);


  return (

// Main container
    <View style={styles.Container}>

          {/* Screen header */}
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

            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => { setModalVisible(!modalVisible); }}
            >
              <View style={styles.centeredView}>

                {/* Modal head */}
                <View style={styles.modalHead}>
                    <Text style={styles.modalHeadText}>Filter by Year</Text>

                    <Pressable
                        style={styles.closeModalButton}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <AntDesign name={'closecircleo'} size={30} color={'#16263C'}/>
                    </Pressable>
                </View>

                {/* Main Modal View */}
                <View style={styles.modalView}>
                  <View style={styles.searchBar}>

                    <TextInput
                        style={styles.searchInput}
                        placeholder="ex: 2007"
                        placeholderTextColor={'#fff'}
                        keyboardType="numeric"
                        autoFocus={true}
                        onSubmitEditing={(value) =>
                          {filterByYearAndUpdateList(value.nativeEvent.text, updatedList, navigation);
                          setModalVisible(!modalVisible);}
                        }
                    />
                  </View>
                </View>

              </View>
            </Modal>

          </View>

{/* Show searched movies result */}
      <FlatList
        style={styles.movieList}
        data={searchResults}

        renderItem={ ({item}) =>
          <MoviePreviewCard movie={item} />
        }

        ListEmptyComponent={
          <View style={styles.emptyListView}>
            <Text style={styles.emptyListText}>
              No Matched Results
            </Text>
          </View>
        }
      />

    </View>
  );
};

export default MovieListScreen;
