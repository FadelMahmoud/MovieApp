/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2b3848',
        borderColor: '#cad7c9',
        height: '100%',
        paddingHorizontal: 10,
        paddingTop: 15,
    },
    moviePoster: {
        backgroundColor: '#ff3',
        borderRadius: 30,
        height: '50%',
        width : '100%',
        resizeMode: 'stretch',
    },
    favouriteIcon:{
        backgroundColor: '#b0b1b2',
        position: 'absolute',
        right: 25,
        top: 25,
        padding: 5,
        borderRadius: 13,
    },
    movieTitle: {
        position: 'absolute',
        left: 5,
        top: '42%',
        margin: 10,
        padding: 5,
        borderRadius: 13,
        color: '#f48a0b',
        fontSize: 20,
        fontWeight: 'bold',
        width: '50%',
    },
    movieRunTimeAndYearView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 15,
        marginVertical: 10,
    },
    movieRunTime: {
        color: '#fff',
        fontSize: 16,
        marginRight: 10,
    },
    movieYear:{
        color: '#fff',
        fontSize: 16,
    },
    genreList: {
        paddingLeft: 10,
    },
    genreButton: {
        backgroundColor: '#eb1f58',
        paddingVertical: 5,
        paddingHorizontal: 10,
        margin: 5,
        alignItems: 'center',
        borderRadius: 20,
        color: '#fff',
    },
    genreButtonText: {
        color: '#fff',
    },
    directorView: {
        flexDirection: 'row',
        marginVertical: 15,
        paddingHorizontal: 15,
    },
    directorText: {
        color: '#fff',
        fontSize: 15,
    },
    directorName: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },
    descriptionView: {
        paddingHorizontal: 15,
    },
    descriptionText: {
        color: '#fff',
        fontSize: 15,
        marginBottom: 5,
    },
    movieDescription: {
        color: '#B7B8BD',
        paddingLeft: 10,
        fontSize: 15,
    },
});

export default styles;