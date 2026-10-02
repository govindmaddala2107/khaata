import { Pressable, StyleSheet, Text, View } from "react-native"

const CustomButton = (props) => {
    return (
        <View style={props.buttonOuterContainer || style.buttonOuterContainer}>
            <Pressable
                android_ripple={{ color: props.android_ripple_color || "blue" }}
                style={({ pressed }) => pressed ? [props.buttonInnerContainer || style.buttonInnerContainer, props.pressed || style.pressed] : props.buttonInnerContainer || style.buttonInnerContainer}
                onPress={props.onPress}
            >
                <Text style={props.buttonText || style.buttonText}>{props.text}</Text>
            </Pressable>
        </View>
    )
}

const style = StyleSheet.create({
    buttonOuterContainer: {},
    buttonInnerContainer: {},
    pressed: {},
    buttonText: {}
})



export default CustomButton