import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';

import Home from '../screens/main/Home';
import BuyingScreen from '../screens/main/BuyingScreen';
import PlayCarom from '../screens/main/PlayCarom';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}} drawerContent={(props) => <CustomDrawer {...props} />} >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="PlayCarom" component={PlayCarom} />
    </Drawer.Navigator>
  );
}
const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="MyDrawer" component={MyDrawer} />
        <Stack.Screen name="BuyingScreen" component={BuyingScreen} />
    </Stack.Navigator>
  )
}

export default MainStack;