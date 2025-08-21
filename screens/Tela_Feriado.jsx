import { StyleSheet, View, ScrollView } from "react-native-web";
import { useState } from "react";
import { InputFeriado } from '../components/Inputs';
import {CardFeriado} from "../components/CardFeriados";
import * as feriado from '../services/feriado.js';

export default function Tela_Feriado(){
    const [data, setData] = useState([]);
    const [nome, setNome] = useState("");
    const [tipo, setTipo] = useState("")

    const exibirFeriados = (ano) => {
        if (!ano || ano.length !== 4) return;

        feriado.getFeriado(ano)
        .then((resposta) => {
            console.log(resposta);

            setData(resposta.date);
            setNome(resposta.name);
            setTipo(resposta.type);
        })
        .catch ((error) =>{
            console.error('Error fetching Ano:', error)
            setData([]);
            setNome([]);
            setTipo([]);
        });
    };
    return (
        <View style={styles.container}>
            <InputFeriado onChangeText={(feriado) => exibirFeriados(feriado.trim())}/>

            <ScrollView style={{ width: '100%'}}>
                {data.map((data, index) => (
                    <CardFeriado
                    key={index}
                    date={data}
                    name={nome}
                    type={tipo}/>
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