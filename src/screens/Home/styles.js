/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        padding: 20,
        // backgroundColor: '#202A36',
        backgroundColor: '#2b3848',
    },
    headerView: {
        height:60,
        flexDirection: 'row',
        alignItems: 'center',
    },
    userImage:{
        height: 50,
        width: 50,
        borderRadius: 25,
        resizeMode: 'cover',
    },
    welcomeTextView:{
        height: '90%',
        marginHorizontal: 20,
        justifyContent: 'space-between',
    },
    helloText: {
        fontSize: 15,
        color: '#fff',
    },
    userName: {
        fontSize: 20,
        color: '#fff',
    },
    searchView: {
        marginTop: 13,
        marginBottom: 3,
        height:80,
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchBar: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        width: '70%',
        height: 55,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 30,
        marginHorizontal: '5%',
    },
    searchInput: {
        fontSize: 16,
        color: '#16263C',
    },
    categoryFilterView: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 55,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'gray',
    },
    MoviesListView: {
        height: 270,
        width: '100%',
        marginVertical: 10,
    },
    MoviesListViewText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },

    // START MODAL STYLING

    centeredView: {
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 20,
        height: '35%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-end',
        borderRadius: 25,
    },
    modalHead: {
        flexDirection: 'row',
        height: '20%',
        width: '100%',
        paddingHorizontal: 15,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        borderBottomColor: '#E4E4E6',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    modalHeadText: {
        color: '#2b3848',
        fontSize: 26,
    },
    closeModalButton: {
        width: 50,
        height: 50,
        padding: 10,
    },
    modalView: {
        height: '80%',
        width: '100%',
        padding: 15,
        borderWidth: 0.3,
        borderBottomStartRadius: 25,
        borderBottomEndRadius: 25,
        
        // shadowColor: '#000',
        // shadowOffset: {
        // width: 0,
        // height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 4,
        // elevation: 5,
    },
    genreButton: {
        backgroundColor: '#eb1f58',
        padding:5,
        margin: 5,
        width: '30%',
        alignItems: 'center',
        borderRadius: 20,
        color: '#fff',
    },
    genreButtonText: {
        color: '#fff',
    },

  // END MODAL STYLING

});

export default styles;
