/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#cad7c9',
        overflow: 'hidden',
        height: 330,
        margin: 10,
    },
    moviePoster: {
        backgroundColor: '#ff3655',
        height: '70%',
        width : '100%',
        resizeMode: 'stretch',
    },
    movieRunTime: {
        position: 'absolute',
        right: 5,
        bottom: '33%',
        marginRight: 5,
        color: '#fff',
        fontWeight: 'bold',
    },
    movieTitleAndYearView: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 0.5,
    },
    movieTitle: {
        color: '#fff',
        alignItems: 'flex-start',
        fontSize: 20,
        fontWeight: 'bold',
        width: '80%',
    },
    movieYear:{
        color: '#fff',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        width: '20%',
    },
    movieDescriptionText: {
        paddingHorizontal: 12,
        color: '#B7B8BD',
    },
});

export default styles;
