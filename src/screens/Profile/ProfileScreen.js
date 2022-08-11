/* eslint-disable prettier/prettier */
import {View, Text, Image, Alert} from 'react-native';
import React from 'react';
import styles from './styles';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import CustomButton from '../../components/CustomButton/CustomButton';

const ProfileScreen = () => {

  return (

// Main container
    <View style={styles.container}>

        {/* Header Row */}
        <View style={styles.headerView}>

            <Image
                style={styles.appIcon}
                source={require('../../assets/AppIcon.png') }
            />

            <Text style={styles.appName}>
                Movie App
            </Text>

            <FontAwesome5 name={'bell'} size={23} color={'#B9BAC2'}/>
        </View>

        {/* User information Row */}
        <View style={styles.userInformationView}>
            <Image
                style={styles.userImage}
                source={require('../../assets/userImage.jpg') }
            />

            <Text style={styles.userName}>
                Mahmoud Fadel
            </Text>

            <Text style={styles.contactNumber}>
                +601128283259
            </Text>
        </View>

        {/* Custom buttons Row */}
        <View>
            <CustomButton
                iconName={'privacy-tip'}
                text={'Privacy Policy'}
                onPressFunction={ () => Alert.alert('Should Navigate to the Privacy Policy screen') } 
            />

            <CustomButton
                iconName={'library-books'}
                text={'Terms and conditions'}
                onPressFunction={ () => Alert.alert('Should Navigate to the Terms and conditions screen') }
            />

            <CustomButton
                iconName={'logout'}
                text={'Log out'}
                onPressFunction={ () => Alert.alert('Should Log out from the account') }
            />
        </View>

    </View>
  );
};

export default ProfileScreen;
