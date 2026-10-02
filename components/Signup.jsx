import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { saveDataToFile } from "../data/handleData";

const SignUp = ({ onSignUp }) => {
    const [userdetails, setUserDetails] = useState({
        fullName: "",
        email: "",
        password: ""
    });

    const handleInput = (type, text) => {
        if (text === undefined) return;
        setUserDetails(prev => ({ ...prev, [type]: text }));
    }

    const handleCreateAccount = async () => {
        const name = userdetails.fullName?.trim();
        if (!name) return;
        try {
            await AsyncStorage.setItem('username', name);
            if (typeof onSignUp === 'function') onSignUp(name);
            await saveDataToFile([{ fullName: userdetails.fullName, email: userdetails.email }], "profile.json");
        } catch (e) {
            console.log('Error saving username', e);
        }
    }
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <ScrollView style={styles.scroll} contentContainerStyle={styles.contentContainer} keyboardShouldPersistTaps="handled">
                <Text style={styles.title}>Create your account</Text>
                <Text style={styles.subtitle}>Let's get started with your details</Text>

                <View style={styles.inputRow}>
                    <Ionicons name="person-outline" size={20} color="#888" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Full name"
                        placeholderTextColor="#999"
                        returnKeyType="next"
                        value={userdetails.fullName}
                        onChangeText={handleInput.bind(this, "fullName")}
                    />
                </View>

                <View style={styles.inputRow}>
                    <Ionicons name="mail-outline" size={20} color="#888" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="#999"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        returnKeyType="next"
                        value={userdetails.email}
                        onChangeText={handleInput.bind(this, "email")}
                    />
                </View>

                <View style={styles.inputRow}>
                    <Ionicons name="lock-closed-outline" size={20} color="#888" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#999"
                        secureTextEntry
                        returnKeyType="done"
                        value={userdetails.password}
                        onChangeText={handleInput.bind(this, "password")}
                    />
                </View>

                <TouchableOpacity style={styles.button} activeOpacity={0.85} onPress={handleCreateAccount}>
                    <Text style={styles.buttonText}>Create account</Text>
                </TouchableOpacity>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Already have an account? <Text style={styles.link}>Sign in</Text></Text>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    scroll: {
        flex: 1,
        backgroundColor: '#000',
    },
    contentContainer: {
        flexGrow: 1,
        padding: 24,
        paddingTop: 0,
        paddingBottom: 40,
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 6,
    },
    subtitle: {
        color: '#9b9b9b',
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 24,
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#0e0e0e',
        paddingVertical: 12,
        paddingHorizontal: 14,
        borderRadius: 10,
        marginBottom: 12,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        color: '#fff',
        fontSize: 16,
        padding: 0,
    },
    button: {
        backgroundColor: '#1e90ff',
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 6,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 16,
    },
    footer: {
        marginTop: 18,
        alignItems: 'center',
    },
    footerText: {
        color: '#777',
    },
    link: {
        color: '#1e90ff',
        fontWeight: '600',
    }
})

export default SignUp;