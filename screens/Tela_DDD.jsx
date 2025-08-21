
import { StyleSheet, View, ScrollView } from 'react-native';
import { useState } from 'react';
import { InputDDD } from '../components/Inputs';
import CardCidade from '../components/CardCidade';
import * as ddd from '../services/ddd.js';

export default function Tela_ddd() {
  const [cidades, setCidades] = useState([]);
  const [estado, setEstado] = useState("");

  const exibirCidadesDoDDD = (digito) => {
    if (!digito || digito.length !== 2) return;

    ddd.getDDD(digito)
      .then((resposta) => {
        console.log(resposta);

        // resposta vem nesse formato:
        // { state: "SP", cities: ["São Paulo", "Campinas", ...] }
        setEstado(resposta.state);
        setCidades(resposta.cities || []);
      })
      .catch((error) => {
        console.error('Error fetching DDD:', error);
        setCidades([]);
        setEstado("");
      });
  };

  return (
    <View style={styles.container}>
      <InputDDD onChangeText={(ddd) => exibirCidadesDoDDD(ddd.trim())} />
      
      <ScrollView style={{ width: '100%' }}>
        {cidades.map((cidade, index) => (
          <CardCidade
            key={index}
            nome={cidade}
            uf={estado}
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
