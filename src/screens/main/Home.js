import { Image, ScrollView, StatusBar, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import theme from '../../theme';
import images from '../../assets/images';

const Home = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1, backgroundColor:'white'}}>
      <StatusBar backgroundColor={'transparent'} translucent={true} barStyle={'light-content'} />
      <AntDesign name='menu-fold' size={25} color={'white'} onPress={() => navigation.toggleDrawer()} style={{position: 'absolute', top: 40, left: 20, padding: 5}} />
      <View style={{width: wp('100%'), height: hp('30%'), backgroundColor: theme.primary_red, position: 'absolute', zIndex: -1}} />

      <View style={{width: wp('90%'), alignSelf: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: hp('11%')}}>
        <View>
          <Text style={{color: 'white', fontSize: hp('1.8%'), fontWeight: 'bold'}}>Your Account Value</Text>
          <Text style={{color: 'white', fontSize: hp('3.2%'), fontWeight: 'bold'}}>$484.68</Text>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '60%'}}>
            <Text style={{color: 'white', fontSize: hp('1.7%')}}>+2.36%  </Text>
            <AntDesign name='arrowup' size={20} color={'white'} />
            <Text style={{color: 'white', fontSize: hp('1.7%')}}>  From last 2 days</Text>
          </View>
        </View>

        <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate('BuyingScreen')} style={{flexDirection: 'row', alignItems: 'center', backgroundColor: theme.themeOrange, width: '35%', height: '60%', justifyContent: 'space-around', padding: 10, borderRadius: 250}}>
          <View style={{width: 1, height: '140%', backgroundColor:'rgba(0,0,0,0.6)', position: 'absolute',left: '57.5%', zIndex: -1, alignSelf: 'center',}} />
          <Text style={{color: 'white', fontSize: hp('1.8%'), fontWeight: 'bold'}}>Buy</Text>
          <View style={{backgroundColor: 'white', justifyContent: 'center', alignItems:'center', width: 22, height: 22, justifyContent: 'center', borderRadius: 250}}>
            <Text style={{fontSize: hp('1.5%'), color: theme.themeOrange}}>or</Text>
          </View>
          <Text style={{color: 'white', fontSize: hp('1.8%'), fontWeight: 'bold'}}>Sell</Text>
        </TouchableOpacity>
      </View>

      <View style={{width: wp('95%'), alignSelf: 'center', height: hp('20%'), marginTop: 20}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{alignItems:'center'}}>
          
          <View style={{width: wp('42%'), elevation: 7, marginHorizontal: 7, borderRadius: 15, height: '90%', backgroundColor: 'white', justifyContent:'space-around'}}>
            <View style={{flexDirection:'row', alignItems:'center', width: '80%', alignSelf: 'center', alignItems:'flex-start'}}>
              <Image source={images.bitcoinImg} style={{marginTop: 5}} />
              <View style={{marginLeft: 8}}>
                <Text style={{fontSize: hp('2%'), color:'black', fontWeight: 'bold'}}>Bit Coin</Text>
                <Text style={{fontSize: hp('1.7%'), color:'grey', fontWeight: 'bold'}}>BTC</Text>
              </View>
            </View>
            <View >
              <Text style={{color: 'black', width: '80%', alignSelf: 'center', fontSize: hp('2.5%'), fontWeight: 'bold'}}>$36,592.28</Text>
              <Text style={{color: 'red', width: '80%', alignSelf: 'center', fontSize: hp('1.8%')}}>- 0.45</Text>
            </View>
          </View>

          <View style={{width: wp('42%'), elevation: 7, marginHorizontal: 7, borderRadius: 15, height: '90%', backgroundColor: 'white', justifyContent:'space-around'}}>
            <View style={{flexDirection:'row', alignItems:'center', width: '80%', alignSelf: 'center', alignItems:'flex-start'}}>
              <Image source={images.ethImg} style={{marginTop: 5}} />
              <View style={{marginLeft: 8}}>
                <Text style={{fontSize: hp('2%'), color:'black', fontWeight: 'bold'}}>Etherium</Text>
                <Text style={{fontSize: hp('1.7%'), color:'grey', fontWeight: 'bold'}}>ETH</Text>
              </View>
            </View>
            <View >
              <Text style={{color: 'black', width: '80%', alignSelf: 'center', fontSize: hp('2.5%'), fontWeight: 'bold'}}>$10,592.28</Text>
              <Text style={{color: 'green', width: '80%', alignSelf: 'center', fontSize: hp('1.8%')}}>+ 0.45</Text>
            </View>
          </View>

          <View style={{width: wp('42%'), elevation: 7, marginHorizontal: 7, borderRadius: 15, height: '90%', backgroundColor: 'white', justifyContent:'space-around'}}>
            <View style={{flexDirection:'row', alignItems:'center', width: '80%', alignSelf: 'center', alignItems:'flex-start'}}>
              <Image source={images.bitcoinImgGreen} style={{marginTop: 5}} />
              <View style={{marginLeft: 8}}>
                <Text style={{fontSize: hp('2%'), color:'black', fontWeight: 'bold'}}>Bit Coin</Text>
                <Text style={{fontSize: hp('1.7%'), color:'grey', fontWeight: 'bold'}}>BTC</Text>
              </View>
            </View>
            <View >
              <Text style={{color: 'black', width: '75%', alignSelf: 'center', fontSize: hp('2.5%'), fontWeight: 'bold'}}>$36,592.28</Text>
              <Text style={{color: 'red', width: '75%', alignSelf: 'center', fontSize: hp('1.8%')}}>- 0.45</Text>
            </View>
          </View>

        </ScrollView>
      </View>

      <Text style={{color: 'rgba(0,0,0,0.8)', fontSize: hp('2.7%'), fontWeight:'bold', width: wp('90%'), alignSelf: 'center', marginVertical: 15}}>Trending Bit Coins</Text>
      <Image source={images.firstGraph} style={{width: wp('105%'), height: hp('45%'), alignSelf: 'center', resizeMode:'contain', marginTop: -55}} />

      <TouchableOpacity activeOpacity={0.6} style={{flexDirection: 'row', justifyContent:'space-around', padding: 15, alignItems: 'center', backgroundColor: 'white', marginBottom: 20, alignSelf: 'center', width: wp('95%'), height: hp('15%'), borderRadius: 15, elevation: 3, marginTop: -30}}>
        <Image source={images.barChart} style={{width: '12%', objectFit: 'contain'}} />
        <View style={{width: '65%', marginLeft: 10}}>
          <Text style={{color:'black', fontWeight: 'bold', fontSize: hp('2.2%'), marginBottom: 5}}>Set Price Alert</Text>
          <Text style={{color:'grey', fontWeight: 'bold', fontSize: hp('1.8%')}}>When price goes up or down, you will be notified.</Text>
        </View>
        <AntDesign name='right' size={28} color='grey' />
      </TouchableOpacity>

      <View style={{width: wp('95%'), alignSelf: 'center', elevation: 3, backgroundColor: 'white', padding: 15, borderRadius: 15, marginBottom: 40}}>
        <View style={{width: '95%', alignSelf: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: hp('2.5%')}}>Purchase History</Text>
          <Text style={{color: theme.primary_red, fontWeight: 'bold', fontSize: hp('2.2%')}}>See All</Text>
        </View>

        <View style={{width: '95%', alignSelf: 'center', justifyContent:'space-between', flexDirection: 'row', alignItems:'center', marginTop: 15}}>
          <View style={{width: '60%', flexDirection: 'row', alignItems: 'center'}}>  
            <Image source={images.bitcoinBig} style={{width: '20%', objectFit:'contain'}} />
            <View style={{marginLeft: 15}}>
              <Text style={{color:'black', fontSize: hp('2.5%'), fontWeight: 'bold'}}>Bit Coin</Text>
              <Text style={{color:'grey', fontSize: hp('1.5%'), fontWeight: 'bold'}}>Yesterday</Text>
            </View>
          </View>
          <View style={{ height: 30, alignSelf: 'flexStart', flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: 'black', fontSize: hp('2.2%'), marginRight: 10}}>Rs. 56,333</Text>
            <AntDesign name='right' size={22} color='black' />
          </View>
        </View>

        <View style={{width: '95%', alignSelf: 'center', justifyContent:'space-between', flexDirection: 'row', alignItems:'center', marginTop: 15}}>
          <View style={{width: '60%', flexDirection: 'row', alignItems: 'center'}}>  
            <Image source={images.ethBig} style={{width: '20%', objectFit:'contain'}} />
            <View style={{marginLeft: 15}}>
              <Text style={{color:'black', fontSize: hp('2.5%'), fontWeight: 'bold'}}>Etherium</Text>
              <Text style={{color:'grey', fontSize: hp('1.5%'), fontWeight: 'bold'}}>14:20 12 Apr</Text>
            </View>
          </View>
          <View style={{ height: 30, alignSelf: 'flexStart', flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: 'black', fontSize: hp('2.2%'), marginRight: 10}}>Rs. 56,333</Text>
            <AntDesign name='right' size={22} color='black' />
          </View>
        </View>

        <View style={{width: '95%', alignSelf: 'center', justifyContent:'space-between', flexDirection: 'row', alignItems:'center', marginTop: 15}}>
          <View style={{width: '60%', flexDirection: 'row', alignItems: 'center'}}>  
            <Image source={images.bitcoinBig} style={{width: '20%', objectFit:'contain'}} />
            <View style={{marginLeft: 15}}>
              <Text style={{color:'black', fontSize: hp('2.5%'), fontWeight: 'bold'}}>Bit Coin</Text>
              <Text style={{color:'grey', fontSize: hp('1.5%'), fontWeight: 'bold'}}>15:36 16 July</Text>
            </View>
          </View>
          <View style={{ height: 30, alignSelf: 'flexStart', flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: 'black', fontSize: hp('2.2%'), marginRight: 10}}>Rs. 56,333</Text>
            <AntDesign name='right' size={22} color='black' />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({})