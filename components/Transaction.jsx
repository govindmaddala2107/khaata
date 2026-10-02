import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useLayoutEffect } from 'react';

const Transaction = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Transaction',
            tabBarIcon: ({ color }) => <Ionicons size={28} name="wallet" color={color} />,
        })
    }, [navigation])
    return (
        <View style={styles.container}>
            <Text>Transaction</Text>
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
export default Transaction