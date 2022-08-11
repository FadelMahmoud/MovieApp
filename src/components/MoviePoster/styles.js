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
        backgroundColor: '#ff3655',
        height: '100%',
        width : '100%',
        resizeMode: 'stretch',
    },
});

export default styles;
