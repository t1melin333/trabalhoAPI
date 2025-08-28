import { StyleSheet, View, Text } from "react-native";
const CardCPNJ = ({ nome, cnpj, uf, nomeFantasia }) => {
    return ( 
        <View style={styles.card}>
            <Text style={styles.texto}>Nome: {nome}</Text>
            <Text style={styles.texto}>CNPJ: {cnpj}</Text>
            <Text style={styles.texto}>UF: {uf}</Text>
            <Text style={styles.texto}>Nome Fantasia: {nomeFantasia} </Text>
        </View>
    );
}
export default CardCPNJ;

const styles = StyleSheet.create({
    card: {
        width: '100%',
        backgroundColor: '#aed1f7ff',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        shadowColor: '#000',
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