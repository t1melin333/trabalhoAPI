import { StyleSheet, View, Text, ScrollView } from "react-native";  
import { useState } from "react";
import { InputCEP } from "../components/Inputs";
import CardCEP from "../components/CardCep";
import * as cepService from "../services/cep.js"; 

export default function Tela_CEP() {
    const [ceps, setCeps] = useState([]); // Lista de CEPs

    const exibirDadosCEP = (digito) => {
        if (!digito || digito.length !== 8) return;

        cepService.getCEP(digito)
            .then((resposta) => {
                console.log(resposta);

                // Adiciona o novo CEP à lista
                setCeps((prevCeps) => [resposta, ...prevCeps]);
            })
            .catch((error) => {
                console.error("Erro ao buscar CEP:", error);
            });
    };

    return (
        <View style={styles.container}>
            <InputCEP onChangeText={(txt) => exibirDadosCEP(txt.trim())} />
            <ScrollView style={{ width: "100%" }}>
                {ceps.map((cepData, index) => (
                    <CardCEP
                        key={index}
                        cep={cepData.cep}
                        street={cepData.street}
                        neighborhood={cepData.neighborhood}
                        city={cepData.city}
                        state={cepData.state}
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
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});
