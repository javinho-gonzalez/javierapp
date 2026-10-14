import { Text, View, StyleSheet, Button} from "react-native";
import { router } from "expo-router";

export default function Index() {

  function irTelalogin(){
    router.replace ("/login")
  }

  function irCadastrar() {
    router.replace ("./cadastrar")
  }

  return (
    <View style={styles.container}>
      <Text>Bem vindo! Aperte login para entrar com credenciais ou aperte o bottão cadastrar pare realizar o seu cadastro</Text>
      <Button color="blue" title="Login" onPress= {irTelalogin}/> 
      <Button color="blue" title="Cadastrar" onPress={irCadastrar}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#f4f4f4f4",
        padding: 60,
        marginTop: 8,
        gap: 16
    },
    button: {
        fontSize: 10,
        padding: 3,
        marginTop: 8,
        marginBottom: 8
    }
    
})

