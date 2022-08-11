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
    headerView: {
        height:60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    appIcon:{
        height: 50,
        width: 50,
        borderRadius: 20,
        resizeMode: 'cover',
    },
    appName: {
        color: '#fff',
        fontSize: 20,
        marginLeft: 15,
    },
    userInformationView: {
        height: 300,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    userImage:{
        height: 120,
        width: 120,
        borderRadius: 60,
        resizeMode: 'cover',
    },
    userName: {
        color: '#fff',
        margin: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    contactNumber: {
        color: '#9EA3A9',
        fontSize: 17,
    },
});

export default styles;
