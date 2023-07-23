import { StyleSheet, Text, View, SafeAreaView, Image, FlatList, ScrollView, Touchable, TouchableOpacity, Button } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import colors from './colors/colors';
import React from 'react';
import car from './data/car';
import kategori from './data/kategori';
import detailkatscreen from './data/detailkat';
import { setStatusBarStyle, setStatusBarTranslucent } from 'expo-status-bar';


export default

  function Beranda({ navigation }) {

  const Stack = createStackNavigator();

  const renderKategoriItem = ({ item }) => {
    return (
      <View style={[styles.kategoriItemWrapper, {
        backgroundColor: 'transparent',
      }]}>
        <Image source={item.image} style={styles.kategoriItemImage} />
        <Text style={styles.kategoriItemTitle}>{item.title}</Text>
        <View style={[styles.kategoriSelectWrapper, { backgroundColor: '#708090' }]}>
          <Feather name="arrow-right" size={15} style={styles.kategorItemIcon} onPress={() => navigation.navigate('detailkat')} />

        </View>
      </View>
    )
  }

  class App extends React.Component {
    render() {
      return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="detailkat"
              component={detailkatscreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
      >

        {/* header */}
        <SafeAreaView>
          <View style={styles.headerwrapper}>
            <Image source={require('../assets/images/profile.png')} style={styles.profilimage} />
            <Text style={styles.wellcome}>Joko Widodo</Text>
            <Feather name="menu" size={24} color={colors.hitam} style={styles.menuheader} />
          </View>
        </SafeAreaView>
        {/* akhir header */}

        {/* title */}
        <View style={styles.titlewrapper}>
          <Text style={styles.subtitle}>RentCarNation</Text>
          <Text style={styles.title}>Rental Mobil instan dan anti ribet</Text>
        </View>
        {/* akhir title */}

        {/* search */}
        <View style={styles.searchWrapper}>
          <Feather name="search" size={16} color={colors.hitam} />
          <View style={styles.search}>
            <Text style={styles.searchText}>Cari Mobil</Text>
          </View>
        </View>
        {/* akhir search */}

        {/* kategori */}
        <View style={styles.kategoriWrapper}>
          <Text style={styles.kategoriTitle}>Kategori</Text>
          <View style={styles.kategoriList}>
            <FlatList
              data={kategori}
              renderItem={renderKategoriItem}
              keyExtractor={(item) => item.idcar}
              horizontal={true}
              showsHorizontalScrollIndicator={true}
            />
          </View>

        </View>
        {/* akhir kategori */}

        {/* listmobil */}
        <View style={styles.listcarWrapper}>
          <Text style={styles.listcarTitle}>Daftar Mobil</Text>
          {car.map((item) => (
            <View style={styles.carCardWrapper}>
              <View>
                <View>
                  <View style={styles.carWrapper}>
                    <Feather
                      name="map"
                      size={14}
                      color='blue'
                    />
                    <Text style={styles.carText}>Mobil Favorit</Text>
                  </View>
                  <View style={styles.cardcarWrapper}>
                    <Text style={styles.cartitle}>{item.title}</Text>
                    <Text style={styles.carket}>Duration  {item.Duration}</Text>
                    <Text style={styles.carket}>Price   {item.price}</Text>

                  </View>
                </View>
                <View>
                  <Image source={item.image} style={styles.carImage} />
                  <Text style={styles.carsub}>{item.sub}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
        {/* akhir mobil */}

      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerwrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  profilimage: {
    width: 40,
    height: 40,
    borderRadius: 40,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  menuheader: {
    paddingVertical: 15
  },
  titlewrapper: {
    marginTop: 20,
    paddingHorizontal: 20
  },
  wellcomewrapper: {
    marginTop: 20,
    paddingHorizontal: 20
  },
  wellcome: {
    paddingRight: 190,
    marginTop: 20,
    fontFamily: 'Roboto',
    fontSize: 15,
    color: colors.hitam
  },
  subtitle: {
    fontFamily: 'Roboto',
    fontSize: 18,
    color: colors.blue
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 12,
    color: colors.hitam
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 30
  },
  search: {
    flex: 1,
    marginLeft: 10,
    borderBottomColor: colors.blue,
    borderBottomWidth: 2
  },
  searchText: {
    fontFamily: 'Roboto',
    fontSize: 14,
    marginBottom: 5,
  },
  kategoriWrapper: {
    marginTop: 20
  },
  kategoriTitle: {
    fontFamily: 'Roboto',
    fontSize: 20,
    paddingHorizontal: 20
  },
  kategoriList: {
    paddingBottom: 20,
    paddingTop: 20
  },
  kategoriItemWrapper: {
    backgroundColor: colors.putih,
    marginRight: 10,
    borderRadius: 20,
    shadowColor: colors.hitam,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 2,

  },
  kategoriItemImage: {
    width: 150,
    height: 60,
    marginTop: 25,
    alignSelf: 'center',
    marginHorizontal: 20,
    resizeMode: 'contain'
  },
  kategoriItemTitle: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 14,
    marginTop: 10
  },
  kategoriSelectWrapper: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
    width: 50,
    height: 20,
    borderRadius: 20
  },
  kategorItemiIcon: {
    alignSelf: 'center',
    color: colors.putih
  },

  listcarWrapper: {
    paddingHorizontal: 10,
  },
  listcarTitle: {
    fontFamily: 'Roboto',
    fontSize: 20,
    paddingLeft: 20,
    marginBottom: 10
  },
  carCardWrapper: {
    backgroundColor: colors.putih,
    borderRadius: 25,
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    shadowColor: colors.hitam,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 2,
  },
  carWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  carText: {
    marginLeft: 10,
    marginTop: 10,
    fontFamily: 'Roboto',
    fontSize: 15,
  },
  cardcarWrapper: {
    fontFamily: 'Roboto',
    fontSize: 12,
    color: colors.hitam,
    marginTop: 10,
  },
  cartitle: {
    fontFamily: 'Roboto',
    fontSize: 16,
    textAlign: 'center',
  },
  carket: {
    fontFamily: 'Roboto',
    fontSize: 12,
    textAlign: 'center',
  },
  carsub: {
    fontFamily: 'Roboto',
    fontSize: 10,
    marginRight: 30,
    marginLeft: 30,
    textAlign: 'center',
  },
  carImage: {
    width: 210,
    height: 125,
    marginRight: 30,
    marginLeft: 60,
    resizeMode: 'contain',
  }
})