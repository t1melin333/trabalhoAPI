import { StyleSheet, View, ScrollView } from "react-native";
import { useState } from "react";
import { InputFeriado } from '../components/Inputs';
import CardFeriado from "../components/CardFeriados";
import * as feriadoService from '../services/feriado.js';

export default function Tela_Feriado() {
    const [feriados, setFeriados] = useState([]); 

    const exibirFeriados = (digito) => {
        if (!digito || digito.length !== 4) return;

        feriadoService.getFeriado(digito)
            .then((resposta) => {
                console.log(resposta);

                
                setFeriados(resposta);
            })
            .catch((error) => {
                console.error('Error fetching Ano:', error);
                setFeriados([]);
            });
    };

    return (
        <View style={styles.container}>
            <InputFeriado onChangeText={(txt) => exibirFeriados(txt.trim())} />
            
            <ScrollView style={{ width: "100%" }}>
                {feriados.map((feriado, index) => (
                    <CardFeriado
                        key={index}
                        date={feriado.date}
                        name={feriado.name}
                        type={feriado.type}
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
