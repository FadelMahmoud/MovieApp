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
});

export default styles;
