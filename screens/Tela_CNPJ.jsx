import { StyleSheet, View, ScrollView } from "react-native";
import { useState } from "react";
import { InputCNPJ } from "../components/Inputs";
import CardCNPJ from "../components/CardCep.jsx";
import * as cnpjService from "../services/cep.js"; // renomeei pra evitar confusão

export default function Tela_CNPJ() {
  const [nomeEmpresa, setNomeEmpresa] = useState("");
  const [cnpjEmpresa, setCnpjEmpresa] = useState("");
  const [ufEmpresa, setUfEmpresa] = useState("");

  const exibirDadosCNPJ = (cnpj) => {
    if (!cnpj || cnpj.length !== 14) return;

    cnpjService.getCNPJ(cnpj)
      .then((resposta) => {
        console.log(resposta);

        // resposta deve vir no formato:
        // { razao_social: "...", uf: "...", cnpj: "..." }
        setNomeEmpresa(resposta.razao_social || resposta.nome);
        setCnpjEmpresa(resposta.cnpj);
        setUfEmpresa(resposta.uf);
      })
      .catch((error) => {
        console.error("Error fetching CNPJ:", error);
        setNomeEmpresa("");
        setCnpjEmpresa("");
        setUfEmpresa("");
      });
  };

  return (
    <View style={styles.container}>
      <InputCNPJ onChangeText={(cnpj) => exibirDadosCNPJ(cnpj.trim())} />
      <ScrollView style={{ width: "100%" }}>
        {nomeEmpresa !== "" && (
          <CardCNPJ
            nome={nomeEmpresa}
            cnpj={cnpjEmpresa}
            uf={ufEmpresa}
          />
        )}
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
