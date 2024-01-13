import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
  Switch,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import theme from '../theme';

const CustomDrawer = (props) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          flex: 1,
          alignItems: 'center'
        }}>
          <AntDesign name="menu-unfold" size={25} color={theme.primary_red} onPress={() => props.navigation.toggleDrawer()} style={{position: 'absolute', top: 40, right: 20, padding: 10}} />

          <TouchableOpacity onPress={() => props.navigation.navigate('Home')} style={styles.optionStyle}>
            <Text style={{color: theme.primary_red, fontSize: hp('2.2%'), fontWeight:'bold', letterSpacing: 2 }}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate('Home')} style={[styles.optionStyle, {marginTop: 0}]}>
            <Text style={{color: theme.primary_red, fontSize: hp('2.2%'), fontWeight:'bold', letterSpacing: 2 }}>Play Carom</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate('Home')} style={[styles.optionStyle, {marginTop: 0}]}>
            <Text style={{color: theme.primary_red, fontSize: hp('2.2%'), fontWeight:'bold', letterSpacing: 2 }}>Recieve Money</Text>
          </TouchableOpacity>
        </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  optionStyle: {width: '90%', backgroundColor: 'rgba(255, 153, 0, 0.2)', marginTop: hp('15%'), justifyContent: 'center', padding: 15, marginVertical: 15, borderRadius: 10}
});
