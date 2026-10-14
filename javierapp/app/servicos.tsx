import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import {router} from "expo-router";
import {styles} from "./login";

function Servicos () {

    function Home () {
        router.replace ('/')
    }

    return(
        <View style={styles.container}>
            <Button title= "SAIR" color= "blue" onPress={Home}/>
        </View>
    )
}
export default Servicos
