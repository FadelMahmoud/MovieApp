/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#cad7c9',
        overflow: 'hidden',
        height: '100%',
        margin: 10,
    },
    moviePoster: {
        backgroundColor: '#ff3',
        height: '50%',
        width : '100%',
        resizeMode: 'stretch',
    },
    favouriteIcon:{
        backgroundColor: '#b0b1b2',
        position: 'absolute',
        right: 5,
        margin: 10,
        padding: 5,
        borderRadius: 13,
    },
    movieTitle: {
        position: 'absolute',
        left: 5,
        top: '40%',
        margin: 10,
        padding: 5,
        borderRadius: 13,
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        width: '50%',
    },
    movieRunTimeAndYearView: {
        backgroundColor: 'lightblue',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 15,
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
    movieDescriptionText: {
        paddingHorizontal: 12,
        color: '#B7B8BD',
    },
});

export default styles;
