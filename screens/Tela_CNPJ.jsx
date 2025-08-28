import { StyleSheet, View, ScrollView } from "react-native";
import { useState } from "react";
import { InputCNPJ } from "../components/Inputs";
import CardCNPJ from "../components/CardCNPJ.jsx";
import * as cnpjService from "../services/cnpj.js";

export default function Tela_CNPJ() {
  const [cnpjs, setCnpjs] = useState([]); // array de objetos { cnpj, nome, uf }

  const exibirDadosCNPJ = (digito) => {
    if (!digito || digito.length !== 14) return;

    cnpjService.getCNPJ(digito)
      .then((resposta) => {
        console.log(resposta);

        const novaEmpresa = {
          cnpj: resposta.cnpj,
          nome: resposta.razao_social || resposta.nome,
          uf: resposta.uf,
          nomeFantasia: resposta.nome_fantasia || resposta.nomeFantasia
        };

        // Evita duplicatas
        setCnpjs((prev) => {
          if (prev.some((e) => e.cnpj === novaEmpresa.cnpj)) return prev;
          return [novaEmpresa, ...prev];
        });
      })
      .catch((error) => {
        console.error("Erro ao buscar CNPJ:", error);
      });
  };

  return (
    <View style={styles.container}>
      <InputCNPJ onChangeText={(txt) => exibirDadosCNPJ(txt.trim())} />
      <ScrollView style={{ width: "100%" }}>
        {cnpjs.map((empresa, index) => (
          <CardCNPJ
            key={index}
            cnpj={empresa.cnpj}
            nome={empresa.nome}
            uf={empresa.uf}
            nomeFantasia={empresa.nomeFantasia}
            
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
