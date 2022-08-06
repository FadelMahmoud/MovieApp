/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#475e46',
        borderRadius: 30,
        borderWidth: 1,
        overflow: 'hidden',
        height: 230,
        width : 160,
        marginHorizontal: 3,
    },
    moviePoster: {
        backgroundColor: '353#ff3655',
        height: '100%',
        width : '100%',
        resizeMode: 'stretch',
    },
    movieTitle: {
        position: 'absolute',
        bottom: 8,
        width : 160,
        paddingHorizontal: 1,
        fontSize: 17,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#f48a0b',
    }
});

export default styles;
