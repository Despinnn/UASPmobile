import { ScrollView } from 'react-native';
import {View, StyleSheet, StatusBar, SafeAreaView, Text, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
export default function Profil() {

  return(
    <View>
        <SafeAreaView>
          <View style={styles.container}>
            <Text style={styles.porpil}>RentCarNation</Text>
            <Feather name="" size={25} style={styles.menuheader}/>
          </View>
        </SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          showsVerticalScrollIndicator={true}>
            <View style={styles.rateCont}>
              <Image source={require('./images/rent.png')} style={styles.rating}></Image>
              <Text style={styles.rated}>Official RentCarNation Mobile App</Text>
            </View>
            <Text style={styles.desk}>RentCarNation Merupakan Perusahaan yang bergerak di jenis bidang persewaan atau rental mobil, Kami memiliki
            Showroom mobil berbagai kategori dan tentunya lengkap. ini pas sekali untuk anda yang ingin bergaya atau rekreasi dengan keluarga
            berbagai pilihan harga miring serta mobil yang lengkap dan lagi proses yang simple, siapapun pasti bisa rental disini.
            kami Menyediakan Bebagai Macam Mobil Guna kebutuhan anda, Kapan Lagi rental mobil lengkap terpercaya dan 
            pastinya proses cepat dan praktis.</Text>
            <View>
              <Image source={require('./images/car.png')} style={styles.profilimage}/>
              <Text style={styles.desk}>Butuh Mobil Untuk piknik? acara penting? atau mungkin sekedar pamer ke temen temen kamu pas lagi reunian???
              Tenang aja kini kami menyediakan berbagai macam jenis dan kategori mobil guna menyelesaikan masalahmu tersebut.
              bergaya ga perlu mahal kok rental di kami sudah pasti murah aman terpercaya dan tentu praktis
              </Text>
              <Text style={styles.desk}>Kenapa harus ribet kalau bisa yang simple???
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
    height:100,
    width:120,
    marginVertical:5,
    marginRight:5,
  },
  rated:{
    textAlign:'center',
    paddingRight:45,
    paddingVertical:25,
    fontSize:15,
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
    backgroundColor: '#778899',
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