import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useLayoutEffect } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';

const AddTransaction = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            tabBarIcon: ({ color }) => <AntDesign name="plus-circle" size={38} color="#3992d7" />,
        })
    }, [navigation])

    const handleBack = () => {
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleBack} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Back</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Add Transaction</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    header: {
        width: '100%',
        paddingTop: 50,
        paddingHorizontal: 16,
        paddingBottom: 16,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    backButton: {
        marginRight: 16,
        padding: 8,
    },
    headerTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
    },
    content: {
        flex: 1,
        padding: 24,
    },
    title: {
        color: '#fff',
        fontSize: 24,
    },
    iconStyle: {
        // backgroundColor: "#000"
    }
})
export default AddTransaction