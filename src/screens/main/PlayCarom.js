import { Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import images from '../../assets/images'
import Button from '../../components/Button';

const PlayCarom = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1, backgroundColor: 'white'}}>
        <StatusBar backgroundColor={'transparent'} translucent={true} barStyle={'light-content'} />
        <View style={{flexDirection: 'row', alignItems:'center', width: wp('86%'), alignSelf: 'center', paddingHorizontal: 5, marginTop: hp('6.5%')}}>
            <AntDesign name="arrowleft" size={25} color={'white'} onPress={() => navigation.goBack()} style={{marginRight:20}} />
            <Text style={{color: 'white', fontWeight: 'bold', fontSize:hp('3%'), marginLeft:20}}>Etherium</Text>
        </View>
        <Image source={images.backCover} style={{width: wp('100%'), height: hp('27%'), alignSelf:'center',  position: 'absolute', zIndex: -1}} />
        <Image source={images.ethBordered} style={{width: wp('35%'), objectFit: 'contain', alignSelf: 'center', marginTop: hp('8%')}} />
        <View style={{alignSelf: 'center'}}>
            <Text style={{fontSize: hp('3%'), textAlign: 'center', color: 'black', fontWeight: 'bold', letterSpacing: 3}}>Etherium</Text>
            <Text style={{fontSize: hp('2%'), textAlign: 'center', color: 'grey', fontWeight: 'bold', letterSpacing: 3}}>ETH</Text>

            <Text style={{fontSize: hp('2.2%'), textAlign: 'center', marginTop: 20, color: 'black', fontWeight: 'bold'}}>$10,699.58</Text>
            <Text style={{fontSize: hp('2%'), textAlign: 'center', marginTop: 5, color: 'red'}}>- 0.45</Text>
        </View>

        <Button btnText={'Buy'} containerStyle={{borderRadius: 250, width: wp('30%'), paddingVertical: 15, marginTop: 10}} />

        <Image source={images.secondGraph} style={{width: wp('95%'), height: hp('45%'), alignSelf: 'center', resizeMode:'contain', marginTop: -20}} />

        <Text style={{color: "darkgrey", fontSize: hp('2%'), width: wp('92%'), alignSelf: 'center'}}>You have ₹5627 Un secured funds. you can change your fund to some other </Text>

        <Image source={images.buyingCard} style={{width: wp('95%'), alignSelf: 'center', objectFit: 'contain'}} />
    </ScrollView>
  )
}

export default PlayCarom

const styles = StyleSheet.create({})