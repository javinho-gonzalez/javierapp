import { StyleSheet, View } from "react-native"


function Card(props: any) {
    return (
        <View style={styles.card}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        width: '90%',
        borderRadius: 10,
        padding: 10,
        justifyContent: 'center'
    }
})

export default Card
