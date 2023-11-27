import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Vibration,
  Pressable,
  Keyboard,
  FlatList,
} from "react-native";
import ResultImc from "../ResultImc/ResultImc";
import { styles } from "./style";

export default function FormMain() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState(
    "Preencha com seu peso e altura"
  );
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");
  const [errorMessage, setErrorMessage] = useState(null);
  const [imcList, setImcList] = useState([]);

  function imcCalculator() {
    let heightFormat = height.replace(",", ".");
    let totalImc = (weight / (heightFormat * heightFormat)).toFixed(2);
    setImcList((arr) => [...arr, { id: new Date().getTime(), imc: totalImc }]);
    setImc(totalImc);
  }

  function verficationImc() {
    if (imc == null) {
      Vibration.vibrate();
      setErrorMessage("Campo obrigatório*");
    }
  }

  function validationImc() {
    if (weight != null && height != null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc("Seu IMC é igual a:");
      setTextButton("Calcular novamente");
      setErrorMessage(null);
    } else {
      verficationImc();
      setImc(null);
      setTextButton("Calcular");
      setMessageImc("Preencha o peso e altura");
    }
  }

  return (
    <View style={styles.formContext}>
      {imc == null ? (
        <Pressable onPress={Keyboard.dismiss} style={styles.form}>
          <Text style={styles.formLabel}>Altura</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TextInput
            style={styles.input}
            placeholder="Insira a sua altura, ex: 1.60 "
            keyboardType="numeric"
            onChangeText={setHeight}
            value={height}
          />
          <Text style={styles.formLabel}>Peso</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TextInput
            style={styles.input}
            placeholder="Insira o seu peso, ex: 75"
            keyboardType="numeric"
            onChangeText={setWeight}
            value={weight}
          />
          <TouchableOpacity style={styles.buttonCalculator}>
            <Text
              onPress={() => validationImc()}
              style={styles.textButtonCalculator}
            >
              {textButton}
            </Text>
          </TouchableOpacity>
        </Pressable>
      ) : (
        <View style={styles.showImcResult}>
          <ResultImc messageResultImc={messageImc} imcResult={imc} />
          <TouchableOpacity style={styles.buttonCalculator}>
            <Text
              onPress={() => validationImc()}
              style={styles.textButtonCalculator}
            >
              {textButton}
            </Text>
          </TouchableOpacity>
        </View>
      )}
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.listImcs}
        data={imcList}
        key={(item) => {
          item.id;
        }}
        renderItem={({ item }) => {
          return (
            <Text style={styles.resultImcItem}>
              <Text style={styles.textResultItemList}>Resultado IMC = </Text>
              {item.imc}
            </Text>
          );
        }}
      ></FlatList>
    </View>
  );
}
