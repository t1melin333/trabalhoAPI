import { StyleSheet, View, ScrollView } from "react-native";
import { useState } from "react";
import { InputISBN } from "../components/Inputs";
import CardISBN from "../components/CardISBN";
import * as isbnService from "../services/isbn.js";

export default function Tela_ISBN() {
    const [livros, setLivros] = useState([]); // Lista de livros

    const exibirDadosISBN = (isbn) => {
        if (!isbn || isbn.length !== 13) return;

        isbnService.getISBN(isbn)
            .then((resposta) => {
                console.log(resposta);

                // Adiciona o livro à lista
                setLivros((prevLivros) => [resposta, ...prevLivros]);
            })
            .catch((error) => {
                console.error("Erro ao buscar ISBN:", error);
            });
    };

    return (
        <View style={styles.container}>
            <InputISBN onChangeText={(isbn) => exibirDadosISBN(isbn.trim())} />
            <ScrollView style={{ width: "100%" }}>
                {livros.map((livro, index) => (
                    <CardISBN
                        key={index}
                        isbn={livro.isbn}
                        authors={livro.authors}
                        title={livro.title}
                        year={livro.year}
                        synopsis={livro.synopsis}
                    />
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start",
    },
});
