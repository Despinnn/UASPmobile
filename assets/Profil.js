import { ScrollView } from 'react-native';
import {View, StyleSheet, StatusBar, SafeAreaView, Text, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
export default function Profil() {

  return(
    <View>
        <SafeAreaView>
          <View style={styles.container}>
            <Text style={styles.porpil}>D2 RENTAL MOBIL DUTA BANGSA</Text>
            <Feather name="" size={25} style={styles.menuheader}/>
          </View>
        </SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          showsVerticalScrollIndicator={true}>
            <View style={styles.rateCont}>
              <Image source={require('./images/1.png')} style={styles.rating}></Image>
              <Text style={styles.rated}>Rating stars : 4.5 in the Town.</Text>
            </View>
            <Text style={styles.desk}>D2 Rental Duta Bangsa adalah sebuah aplikasi di mana kamu dapat menyewa 
            berbagai macam kendaraan milik pribadi dari pemilik terverifikasi,
             berbagai macam aktivitas kamu hanya dalam satu aplikasi! Kenyamanan dan keamanan perjalanan kamu adalah hal paling penting bagi D2 Rental, 
             Untuk itu, D2 Rental selalu mengedepankan teknologi untuk terus memberikan fitur-fitur yang bikin perjalananmu untuk rental mobil semakin menyenangkan!</Text>
            <View>
              <Image source={require('./images/5.png')} style={styles.profilimage}/>
              <Text style={styles.desk}>Perlu pergi-pergi ke berbagai tempat? Jangan khawatir! 
              Dengan D2 Rental kamu bisa sewa mobil harian dengan harga yang terbaik dan transparan. 
              Kamu juga bisa pilih mau pakai supir atau lepas kunci, tanpa dikenakan deposit. Bosan 
              dengan pilihan kendaraan untuk sewa mobil yang itu-itu aja? Berbagai pilihan kendaraan 
              untuk rental mobil tersedia di Dr Rental mulai dari MPV, SUV, sampai kendaraan mewah ala 
              sultan juga bisa kamu sewa di D2 Rental.
              </Text>
              <Image source={require('./images/4.png')} style={styles.profilimage}/>
              <Text style={styles.desk}>Pilih kendaraan di D2 Rental gampang banget! Ada rating, dan juga kamu 
              bisa cari kendaraan sesuai kebutuhan kamu, matic, manual ataupun butuh perlengkapan lainnya seperti GPS,
               bisa langsung kamu filter dari aplikasi. Jadikan D2 Rental teman andalan kamu untuk segala kebutuhan 
               transportasi kamu sewa mobil mulai dari untuk pergi liburan keluarga, kencan bareng pacar, ataupun buat
                dinas ke luar kota.
              </Text>

            </View>
      </ScrollView>
    </View>
  )
}
 
const styles = StyleSheet.create({
  rateCont:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:10,
  },
  rating:{
    height:70,
    width:120,
    marginVertical:5,
    marginRight:5,
  },
  rated:{
    textAlign:'center',
    paddingRight:45,
    paddingVertical:25,
    fontSize:19,
    color:'blue',
  },
  menuheader:{
    paddingHorizontal:1,
    paddingVertical:5,
  },
  container:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:10,
    paddingVertical:10,
    backgroundColor: '#FFBDF7',
  },
  profilimage:{
    flexDirection:'row',
    height:200,
    width:350,
    borderRadius:15,
    marginVertical:5,
    marginHorizontal:20,
  },
  porpil:{
    fontSize:25,
    fontWeight:'bold',
  },
  desk:{
    textAlign:'justify',
    fontStyle:'italic',
    paddingHorizontal:20,
    paddingTop:5,
    lineHeight:23,
    fontSize:18,
    
  }
})