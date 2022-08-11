/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#2b3848',
        flex: 1,
        padding: 20,
    },
    headerView: {
        height:80,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    headerTextView: {
        width: '85%',
        paddingHorizontal: 15,
    },
    headerResultText: {
        color: '#fff',
        fontSize: 20,
    },
    headerMessage: {
        color: '#fff',
        fontSize: 27,
        fontWeight: 'bold',
    },
    yearFilterView: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 55,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'gray',
        marginHorizontal: 10,
    },
    movieList: {
        backgroundColor: '#2b3848',
        width: '100%',
        height: '100%',
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
    },
    searchBar: {
        backgroundColor: '#2b3848',
        width: '50%',
        height: 55,
        justifyContent: 'center',
        borderRadius: 30,
        paddingHorizontal: 20,
    },
    searchInput: {
        color: '#fff',
        fontSize: 16,
    },
    yearButton: {
        backgroundColor: '#eb1f58',
        color: '#fff',
        padding:5,
        margin: 5,
        width: '30%',
        alignItems: 'center',
        borderRadius: 20,
    },
    yearButtonText: {
        color: '#fff',
    },
    emptyListView: {
        marginVertical: '60%',
        marginHorizontal: 30 ,
        borderRadius: 15,
        borderColor: '#fff',
        borderWidth: 1 ,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emptyListText: {
        color: '#fff',
        fontSize: 35,
        padding: 20,
        textAlign: 'center',
    },

  // END MODAL STYLING

});

export default styles;
