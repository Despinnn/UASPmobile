import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import {StyleSheet, Text, View,SafeAreaView,Image, FlatList, ScrollView, Touchable, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import detailkatScreen from './detailkat';

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            name="Friends"
            component={detailkatScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default function TentangKami(){
  return (
    <View style={styles.listAboutWrapper}>
      <Text style={styles.listAboutTitle}>Developer Aplication Profile</Text>
      {about.map((item)=>(
        <View style={styles.aboutCardWrapper}>
          <View>
            <View>
              <View style={styles.aboutWrapper}>
                <Feather
                  name="user"
                  size={14}
                  color='green'
                />
                <Text style={styles.aboutText}> KELOMPOK </Text>    
              </View>
              <View style={styles.cardAboutWrapper}>

                <Text style={styles.aboutTitle}>Nama : {item.title}</Text>
                <Text style={styles.aboutKet}>NIM      : {item.subTitle}</Text>
              </View>
            </View>
            <View>
                    <Image source={item.image} style={styles.aboutImage}/>
                  </View>
          </View>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  listAboutWrapper:{
    paddingHorizontal:20,
    paddingTop:10,
  },

  listAboutTitle:{
    fontSize:25,
    marginBottom:10,
    fontWeight:"bold",
  },

  aboutCardWrapper:{
    backgroundColor:'#e6e6fa',
    borderRadius:20,
    paddingTop:10,
    paddingLeft:20,
    flexDirection:'row',
    marginBottom:10,
    shadowColor:'blue',
      shadowOffset:{
        width:20,
        height:20},
      shadowOpacity:1,
      shadowRadius:40,
      elevation:30,    
  },

  aboutWrapper:{
    flexDirection:'row',
    alignItems:'center',
  },

  aboutText:{
    fontSize:14,
    fontWeight:'bold',
  },

  cardAboutWrapper:{
    backgroundColorcolor:'black',
    marginTop:5,
  },

  aboutTitle:{
    fontSize:20,
  },

  aboutKet:{
    fontSize:18,
    paddingBottom:15,
  },
  aboutImage:{
  width:100,
  height:120,
    marginRight: 10,
  marginLeft: 10,
}
})