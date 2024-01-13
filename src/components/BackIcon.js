import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const BackIcon = ({onPress}) => {
  return (
    // <View style={{height:80}}>

    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignSelf: 'flex-start',
        padding: 10,
        borderRadius: 250,
        position: 'absolute',
        top: 10,
        left: 15,
        marginTop:15,
        zIndex: 1000,
        
      }}>
      <AntDesign name="arrowleft" size={25} color={"white"} />
    </TouchableOpacity>
        // </View>
  );
};

export default BackIcon;