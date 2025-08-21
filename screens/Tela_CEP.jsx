import { StyleSheet, View, Text, ScrollView } from "react-native";  
import { useState } from "react";
import { InputCEP } from "../components/Inputs";
import CardCEP from "../components/CardCep.jsx";
import * as cepService from "../services/cep.js"; 

export default function Tela_CEP() {
    const [cep, setCep] = useState([]);
    const [logradouro, setLogradouro] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");

    const exibirDadosCEP = (cep) => {
        if (!cep || cep.length !== 8) return;

        cepService.getCEP(cep)
            .then((resposta) => {
                console.log(resposta);

                // resposta deve vir no formato:
                // { cep: "...", logradouro: "...", bairro: "...", cidade: "...", estado: "..." }
                setCep(resposta.cep);
                setLogradouro(resposta.logradouro);
                setBairro(resposta.bairro);
                setCidade(resposta.cidade);
                setEstado(resposta.estado);
            })
            .catch((error) => {
                console.error("Error fetching CEP:", error);
                setCep("");
                setLogradouro("");
                setBairro("");
                setCidade("");
                setEstado("");
            });
    };
    return (
        <View style={styles.container}>
            <InputCEP onChangeText={(cep) => exibirDadosCEP(cep.trim())} />
            <ScrollView style={{ width: "100%" }}>
                {cep !== "" && (
                    <CardCEP
                        cep={cep}
                        logradouro={logradouro}
                        bairro={bairro}
                        cidade={cidade}
                        estado={estado}
                    />
                )}
            </ScrollView>
        </View>
    );

}

const styles = StyleSheet.create({
    container:
     {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
