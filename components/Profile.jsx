import { StyleSheet, Text, View, Button } from 'react-native'
import { useLayoutEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({ navigation, setName }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Profile',
            tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} />,
        })
    }, [navigation])

    const handleSignout = async () => {
        try {
            await AsyncStorage.removeItem('username');
        } catch (e) {
            console.log('Error removing username', e);
        }
        if (typeof setName === 'function') setName('');
        // optionally navigate to Home
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <Text>Profile</Text>
            <Button title='Logout' onPress={handleSignout} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
export default Profile