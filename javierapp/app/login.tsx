import { Text, View, StyleSheet, TextInput, Button, Alert } from "react-native";
import {router} from "expo-router";
import {useState} from "react";


export default function Login(){

    const [usuario, setUsuario] = useState ("");
    const [senha, setSenha] = useState ("");

    function Home () {
        router.replace ("/")
    }

    function handleLogin() {
    if (!usuario || !senha) {
    alert("Atenção! Preencha usuário e senha!")
    return;
    }

    if (usuario === 'admin' && senha === '1234') {
    router.replace('/servicos');
    } else {
    alert("Erro! Usuário ou senha incorretos!")
    }
    }
    return (
        <>
            <View style={styles.container}>
                <Text>Bemvindo! Para acessar o painel de serviços efetue o seu login usando as credenciais usuario: admin e senha: 1234</Text>
                <View style={styles.card}>
                    <Text style={styles.text}>Usuario (usar: admin)</Text>
                    <TextInput style={styles.input} placeholder = "usuario" value = {usuario} onChangeText = {setUsuario}/>
                    <Text style={styles.text}>Senha (usar: 1234)</Text>
                    <TextInput style={styles.input} placeholder = "senha" value = {senha} onChangeText = {setSenha} secureTextEntry/>
                    <Button color="blue" title="Acessar" onPress={handleLogin}/>
                </View>
                
            </View>
            <View style={styles.cardbottom}>
                    <Button color="blue" title="Voltar" onPress={Home}/>
            </View>
        </>
    )
}
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#f4f4f4f4",
        gap: 8
    },
    card: {
        backgroundColor: 'white',
        width: '90%',
        borderRadius: 10,
        padding: 10,
        justifyContent: 'center',
        gap: 8
    },
    cardbottom: {
        backgroundColor: '#f4f4f4f4',
        width: '40%',
        borderRadius: 0,
        padding: 10,
        justifyContent: 'flex-end',
        gap: 8,
        marginTop: 0
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 3,
        marginTop: 8

    },
    text: {
        color: '#333',
        fontSize: 10
    },
    button: {
        fontSize: 10,
        padding: 3,
        marginTop: 8
    }
})
