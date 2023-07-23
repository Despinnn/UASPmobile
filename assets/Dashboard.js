import { View, Text , StatusBar, StyleSheet, Image} from 'react-native';

const styles = StyleSheet.create({    
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  content: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'black',
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginVertical:20
  }
});    

const Dashboard = () => {
  return (
    <View style={styles.home}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <Image source={{uri:'https://i.postimg.cc/MpzQJ6Cv/udb1.png'}} style={styles.logo} />
      <Text style={styles.content}>Selamat datang di aplikasi "Atok"</Text>
    </View>
  )
};
  
export default Dashboard;