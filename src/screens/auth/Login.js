import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import images from '../../assets/images'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Input from '../../components/Input'
import Button from '../../components/Button'
import theme from '../../theme'

const Login = ({navigation}) => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleFormChange = (key, value) => {
    setForm({...form, [key]: value})
  }
  
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1, backgroundColor: 'white', justifyContent: 'center'}}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <Image source={images.logo} style={{width: wp('70%'), alignSelf: 'center', objectFit: 'contain'}} />

      <Text style={{fontSize: hp('3.2%'), color: 'black', fontWeight: 'bold', width: wp('88%'), alignSelf: 'center', marginVertical: 20}}>Login with your credentials</Text>

      <Input placeholder={'username or email'} value={form.email} onChangeText={changedText => handleFormChange('email', changedText)} containerStyle={{marginBottom:20}} />
      <Input placeholder={'passowrd'} password={true} value={form.password} onChangeText={changedText => handleFormChange('password', changedText)} containerStyle={{marginBottom:20}} />

      <Button btnText={'Login'} containerStyle={{marginTop: 20}} onPress={() => navigation.navigate('MainStack')} />

      <View style={{width: wp('88%'), alignSelf: 'center', flexDirection: 'row', marginVertical: 40}}>
        <Text style={{fontSize: hp('2%'), color: 'rgba(0,0,0,0.7)'}}>Or if you don't have an account,</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')} style={{marginLeft: 5, paddingHorizontal: 5}}><Text style={{color: theme.primary_red, fontWeight: 'bold', borderBottomWidth: 2, borderBottomColor: theme.primary_red, fontSize: hp('2.2%')}}>Sign up</Text></TouchableOpacity>
      </View>
      
    </ScrollView>
  )
}

export default Login

const styles = StyleSheet.create({})