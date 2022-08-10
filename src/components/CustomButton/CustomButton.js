/* eslint-disable prettier/prettier */
import {View, Text, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CustomButton = (props) => {

  const text = props.text;
  const iconName = props.iconName;

  return (

    <Pressable
        style={styles.customButton}
        onPress={props.onPressFunction}
    >
        <MaterialIcons name={iconName} size={25} color={'#dadadb'}/>

        <Text style={styles.customButtonText}>
            {text}
        </Text>
    </Pressable>

  );
};

export default CustomButton;
