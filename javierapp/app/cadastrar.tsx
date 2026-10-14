import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import {router} from "expo-router";
import {styles} from "./login";
import {useState} from "react";


function Cadastrar () {

    const [nome, setNome] = useState ("");
    const [sobrenome, setSobrenome] = useState ("");

    function Home () {
        router.replace ('/')
    }

    function handleCadastro() {
    if (!nome || !sobrenome) {
    alert("Atenção! Nome e Sobrenome são campos obrigatórios!")
    return;
    } else {
    alert("Cadastro realizado com sucesso! Aperte OK para efetuar o seu primeiro login!")
    router.replace ('/login');
    }
    }


    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.text}>Nome: (obrigatorio)</Text>
                <TextInput style={styles.input} value = {nome} onChangeText= {setNome}/>
                <Text style={styles.text}>Sobrenome: (obrigatorio)</Text>
                <TextInput style={styles.input} value = {sobrenome} onChangeText = {setSobrenome}/>
                <Text style={styles.text}>CPF:</Text>
                <TextInput style={styles.input}/>
                <Text style={styles.text}>Data de Nascimento:</Text>
                <TextInput style={styles.input}/>
                <Text style={styles.text}>Telefone:</Text>
                <TextInput style={styles.input}/>
                <Text style={styles.text}>E-mail:</Text>
                <TextInput style={styles.input}/>
                <Text style={styles.text}>Nome de Usúario (admin):</Text>
                <TextInput style={styles.input}/>
                <Text style={styles.text}>Senha (1234):</Text>
                <TextInput style={styles.input}/>
                <Button title="CADASTRAR" color="blue" onPress={handleCadastro}/>
            </View>
            <View style={styles.cardbottom}>
                <Button title="VOLTAR" color="blue" onPress={Home}/>
            </View>
        </View>
    )

}
export default Cadastrar