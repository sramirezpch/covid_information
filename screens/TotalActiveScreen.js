import React from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

const TotalActiveScreen = () => {

    return (
        <View style={styles.container}>
            <Text>Total active cases screen</Text>
        </View>
    )
}

TotalActiveScreen.navigationOptions = ({ navigation }) => {
    return{
        title: "COVID-19 active cases",
        headerStyle: {
            backgroundColor: '#2b9ed9'
        },
        headerTitleStyle: {
            color: 'white'
        },
        headerLeft: () => {
            return(
                <TouchableOpacity onPress={() => navigation.goBack()} onLongPress={() => Alert.alert("Go back to the movie list")}>
                    <Icon 
                        style={{paddingLeft: 12}}
                        name="arrow-back"
                        size={30}
                        color="white"
                    />
                </TouchableOpacity>
            )
        }
    }
}
export default TotalActiveScreen