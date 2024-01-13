import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import images from '../../assets/images'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Input from '../../components/Input'
import Button from '../../components/Button'
import BackIcon from '../../components/BackIcon'

const Signup = ({navigation}) => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleFormChange = (key, value) => {
    setForm({...form, [key]: value})
  }
  
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1, backgroundColor: 'white', justifyContent: 'center'}}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />

      <BackIcon onPress={() => navigation.goBack()} />
      
      <Image source={images.logo} style={{width: wp('70%'), alignSelf: 'center', objectFit: 'contain'}} />

      <Text style={{fontSize: hp('3.2%'), color: 'black', fontWeight: 'bold', width: wp('88%'), alignSelf: 'center', marginVertical: 20}}>Create your account</Text>

      <Input placeholder={'username'} value={form.username} onChangeText={changedText => handleFormChange('username', changedText)} containerStyle={{marginBottom:20}} />
      <Input placeholder={'email'} value={form.email} onChangeText={changedText => handleFormChange('email', changedText)} containerStyle={{marginBottom:20}} />
      <Input placeholder={'passowrd'} password={true} value={form.password} onChangeText={changedText => handleFormChange('password', changedText)} containerStyle={{marginBottom:20}} />
      <Input placeholder={'confirm passowrd'} password={true} value={form.confirmPassword} onChangeText={changedText => handleFormChange('confirmPassword', changedText)} containerStyle={{marginBottom:20}} />

      <Button btnText={'Sign up'} containerStyle={{marginTop: 20}} onPress={() => navigation.navigate('Login')} />
    </ScrollView>
  )
}

export default Signup

const styles = StyleSheet.create({})