import React from "react";
import { useState, useContext } from "react";
import { View,  StyleSheet,  TouchableOpacity} from "react-native";
import{Text, Input, Button} from "react-native-elements"


const InputFields = ({titleHeader, buttonTitle, accountInfo, navPoint, tabPoint}) =>{

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

const handleSignup = () => {
    tabPoint({ email, password });
  };

   return(
        <View style={styles.container}>
            <Text h3 style={styles.titleHeader}>{titleHeader}</Text>

            <Input label="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            autoCorrect={false}
            />

            <Input label="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
            autoCorrect={false}
            />
            
            <Button 
            style={styles.buttonStyle}
            title={buttonTitle}
            onPress={handleSignup}
            />
            
            <TouchableOpacity
            onPress={navPoint}
            >
            <Text>{accountInfo}</Text>
            </TouchableOpacity>
            

        </View>
   )
}

const styles = StyleSheet.create({
    inputStyles:{
        width:370,
        height: 40,
        borderWidth:1,
        marginHorizontal:10
    },
    titleHeader:{
        marginBottom:15
    },
    container:{
        flex:1,
        justifyContent: 'center',
        marginBottom:100
    },
    buttonStyle:{
        width:100
    }
})

export default InputFields;