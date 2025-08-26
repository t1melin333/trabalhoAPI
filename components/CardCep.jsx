import { StyleSheet, View, Text } from "react-native";

const CardCEP = ({ cep, logradouro, bairro, cidade, estado }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.texto}>CEP: {cep}</Text>
            <Text style={styles.texto}>Logradouro: {logradouro}</Text>
            <Text style={styles.texto}>Bairro: {bairro}</Text>
            <Text style={styles.texto}>Cidade: {cidade}</Text>
            <Text style={styles.texto}>Estado: {estado}</Text>
        </View>
    );
}

export default CardCEP;

const styles = StyleSheet.create({
    card: { 
    width: '100%',
        backgroundColor: '#ffc7f8',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        shadowColor: '#000',
        flexDirection: 'row',
        justifyContent: 'space-between',
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