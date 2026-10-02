import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from './components/Home';
import Transaction from './components/Transaction';
import AddTransaction from './components/AddTransaction';
import Analytics from './components/Analytics';
import Profile from './components/Profile';
import ExpenseProvider, { ExpenseStore } from './store/ExpenseStore';
import { readDataFromFile } from './data/handleData';
import { useContext, useEffect, useState } from 'react';
import SignUp from './components/Signup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-web';

const Tab = createBottomTabNavigator();

function AddTabBarButton({ children, onPress }) {
  return (
    <View style={styles.tabBarContainer}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={styles.tabBarButtonStyle}
      >
        {children}
      </TouchableOpacity>
    </View>
  );
}


function Navigation({ setName }) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: { backgroundColor: 'black', height: 60 },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          headerShown: false
        })}
      >
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Transaction' component={Transaction} />
        <Tab.Screen
          name='AddTransaction'
          component={AddTransaction}
          options={{
            tabBarButton: (props) => <AddTabBarButton {...props} />,
            tabBarStyle: { display: 'none' },
            headerShown: false,
          }}
        />
        <Tab.Screen name='Analytics' component={Analytics} />
        <Tab.Screen name='Profile'>
          {props => <Profile {...props} setName={setName} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default function App() {

  const [name, setName] = useState("");

  useEffect(() => {
    const getUserName = async () => {
      try {
        const username = await AsyncStorage.getItem('username');
        setName(username);
      } catch (e) {
        setName("");
      }
    };
    getUserName();
  }, [])

  return (
    <ExpenseProvider>
          {
            name ? <Navigation setName={setName} /> : <SignUp onSignUp={(username) => setName(username)} />
          }
    </ExpenseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden"
  },
  buttonInnerContainer: {
    backgroundColor: "#000000a3",
    elevation: 2,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  pressed: {
    backgroundColor: "#000000",
    opacity: 0.75
  },
  buttonText: {
    color: "white",
    textAlign: "center"
  },
  tabBarContainer: {
    top: -18,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabBarButtonStyle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 10,
  }
});
