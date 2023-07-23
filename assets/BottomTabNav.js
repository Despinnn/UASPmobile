import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Beranda from './Beranda'
import Aboutus from './aboutus'
import Profil from './Profile'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator 
      initialRouteName="Beranda"
      activeColor="#000"
      inactiveColor="#000000"
      >
      <Tab.Screen 
      name="Beranda"
      component={Beranda} 
      options={{
          tabBarLabel: 'Beranda',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          )
        }}
      />
      <Tab.Screen 
      name="Tentang Kami" 
      component={Aboutus}
      options={{
          tabBarLabel: 'Tentang Kami',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
      name="Profil"
      component={Profil} 
      options={{
          tabBarLabel: 'Profil',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;