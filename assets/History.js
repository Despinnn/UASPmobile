import {View, StyleSheet, StatusBar, SafeAreaView, SectionList, FlatList, Text} from 'react-native'
import {useEffect, useState} from 'react';

const styles = StyleSheet.create({
  history: {
    
  },
  nama: {
    padding:10,
    marginVertical:5,
    marginHorizontal:10,
    borderWidth:1,
    borderRadius:5
  }
})

const Users = props => {
    const [isLoading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/albums')
          .then((response) => response.json())
          .then((json) => setUsers(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
    }
    useEffect(() => {
        setLoading(true);
        getUsers();
    }, []);
    return(
        <View style={styles.history}>
            {isLoading ? <Text>Loading...</Text> :
            (
              <FlatList
                data={users}
                renderItem={({ item }) => <Text style={styles.nama}>{item.title}</Text> }
              />
            )}
        </View>
    );
};

const History = () => {
  return (
    <SafeAreaView>
      <StatusBar translucent backgroundColor={'transparent'} />
      <Users />
    </SafeAreaView>
  )
};

export default History;