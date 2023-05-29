import React, {useContext} from "react";
import { View, Text, StyleSheet} from "react-native";
import { useNavigation } from "@react-navigation/native";
import InputFields from "../component/InputFields";
import { Context as AuthContext } from "../context/AuthContext";

const SignupScreen = () =>{
    const {state, signup} = useContext(AuthContext)
    const navigation = useNavigation();

    const NextLocation = () =>{
        navigation.navigate("Sign In");
    };


    
    return(
        <InputFields
        titleHeader="Sign Up for Tracker" 
        buttonTitle="Sign Up"
        accountInfo="Already have an account? Sign in Here!"
        navPoint = {NextLocation}
        tabPoint={signup}
        />
    )
}

const styles = StyleSheet.create({

})

export default SignupScreen;