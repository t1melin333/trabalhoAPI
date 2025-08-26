import { StyleSheet, View, ScrollView, Text } from "react-native";
import { useState } from "react";
import { InputISBN } from "../components/Inputs";
import CardISBN from "../components/CardISBN";
import * as isbnService from "../services/isbn.js";

export default function Tela_ISBN() {
    const [livro, setLivro] = useState([]);
    const [authors, setAutor] = useState("");
    const [title, setTitulo] = useState("");
    const [year, setAno] = useState("");
    const [synopsis, setSinopse] = useState("");

    const exibirDadosISBN = (isbn) => {
        if (!isbn || isbn.length !== 13) return;
        isbnService.getISBN(isbn)
            .then((resposta) => {
                console.log(resposta);

                // resposta deve vir no formato:
                // { isbn: "...", autor: "...", titulo: "...", ano: "...", sinopse: "..." }
                setLivro(resposta.isbn);
                setAutor(resposta.authors);
                setTitulo(resposta.title);
                setAno(resposta.year);
                setSinopse(resposta.synopsis);
            })
            .catch((error) => {
                console.error("Error fetching ISBN:", error);
                setLivro("");
                setAutor("");
                setTitulo("");
                setAno("");
                setSinopse("");
            });
    };
    return (
        <View style={styles.container}>
            <InputISBN onChangeText={(isbn) => exibirDadosISBN(isbn.trim())} />
            <ScrollView style={{ width: "100%" }}>
                {livro !== "13" && (
                    <CardISBN
                        isbn={livro}
                        authors={authors}
                        title={title}
                        year={year}
                        synopsis={synopsis}
                    />
                )}
            </ScrollView>
            </View>
    );
}

const styles = StyleSheet.create({
    container:  {
        padding: 20,            
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start",
    },
});