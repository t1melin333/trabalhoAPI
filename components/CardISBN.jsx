import { StyleSheet, View, ScrollView, Text } from "react-native";

const CardISBN = ({ isbn, authors, title, year, synopsis }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.texto}>ISBN: {isbn}</Text>
            <Text style={styles.texto}>Autor: {authors}</Text>
            <Text style={styles.texto}>Titulo: {title}</Text>
            <Text style={styles.texto}>Ano de lançamento: {year}</Text>
            <ScrollView>
                <Text style={styles.texto}>Sinopse: {synopsis}</Text>
            </ScrollView>
        </View>
    );
}

export default CardISBN;

const styles = StyleSheet.create({
    card: {
        width: '100%',
        backgroundColor: '#aed1f7ff',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        shadowColor: '#000',
        flexDirection: 'column',
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
        color: '#333',
    },  
});