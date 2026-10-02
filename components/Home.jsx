import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { ExpenseStore } from '../store/ExpenseStore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { readDataFromFile } from '../data/handleData';

const Home = ({ navigation }) => {

  const [name, setName] = useState("");
  useEffect(() => {
    const getUserName = async () => {
      try {
        const username = await AsyncStorage.getItem('username');
        const data = await readDataFromFile("profile.json");
        console.log(data)
        setName(username);
      } catch (e) {
        setName("");
      }
    };
    getUserName();
  }, [])

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Home',
      tabBarIcon: ({ color }) => <Ionicons size={28} name="home" color={color} />,
    })
  }, [navigation])
  return (
    <View style={styles.container}>
      <Text style={styles.content}>Greetings: {name} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    color: 'white'
  }
})
export default Home