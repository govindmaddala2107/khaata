import { StyleSheet, Text, View } from 'react-native'
import { useLayoutEffect } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Analytics = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Analytics',
            tabBarIcon: ({ color }) => <MaterialIcons size={28} name="wallet" color={color} />,
        })
    }, [navigation])
    return (
        <View style={styles.container}>
            <Text>Analytics</Text>
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
export default Analytics