import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo';

const Input = ({
  placeholder,
  value,
  onChangeText,
  containerStyle,
  inputStyle,
  password = false,
  keyboardType,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        style={[styles.input, inputStyle]}
        placeholder={placeholder}
        placeholderTextColor={'grey'}
        value={value}
        onChangeText={onChangeText}
        cursorColor={'black'}
        secureTextEntry={password ? !showPassword : null}
        keyboardType={keyboardType}
      />
      {password ? (
        showPassword ? (
          <Entypo
            onPress={() => setShowPassword(false)}
            name="eye-with-line"
            size={25}
            color="black"
          />
        ) : (
          <Entypo
            onPress={() => setShowPassword(true)}
            name="eye"
            size={25}
            color="black"
          />
        )
      ) : null}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'grey',
    width: wp('90%'),
    borderRadius: 8,
    padding: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    color: 'black',
    fontSize: hp('2%'),
    width: '90%',
  },
});
