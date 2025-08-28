import { StyleSheet, View, Text } from "react-native";

const CardCEP = ({ cep, street, neighborhood, city, state }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.texto}>CEP: {cep}</Text>
            <Text style={styles.texto}>Logradouro: {street}</Text>
            <Text style={styles.texto}>Bairro: {neighborhood}</Text>
            <Text style={styles.texto}>Cidade: {city}</Text>
            <Text style={styles.texto}>Estado: {state}</Text>
        </View>
    );
}

export default CardCEP;

const styles = StyleSheet.create({
    card: { 
    width: '100%',
        backgroundColor: '#aed1f7ff',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    texto: {
        fontSize: 16,
        color: '#331d1d',
    },
});