import React from "react";
import { View, Text, StyleSheet} from "react-native";
import { useNavigation } from "@react-navigation/native";
import InputFields from "../component/InputFields";


const SigninScreen = () =>{
    const navigation = useNavigation();

    const NextLocation = ()=>{
        navigation.navigate("Sign Up")
    }
    const TabLocation = ()=>{
        navigation.navigate("Tabs")
    }

    return(
        <InputFields
        titleHeader="Sign in to Tracker"
        buttonTitle="Sign In"
        accountInfo="Don't have an account? Sign Up Here!"
        navPoint={NextLocation}
        tabPoint={TabLocation}
        />
    )
}

const styles = StyleSheet.create({

})

export default SigninScreen;