import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import ResultImc from "../ResultImc/ResultImc";
import { TouchableOpacity } from "react-native";

export default function FormMain() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState("Preencha seu peso e altura");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");

  function imcCalculator() {
    return setImc((weight / (height * height)).toFixed(2));
  }

  function validationImc() {
    if (weight != null && height != null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc("Seu IMC é igual:");
      setTextButton("Calcular novamente");
      return;
    }
    setImc(null);
    setTextButton("Calcular");
    setMessageImc("Preencha o peso e altura");
  }

  return (
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput
          placeholder="Insira sua Altura"
          keyboardType="numeric"
          onChangeText={setHeight}
          value={height}
        />
        <Text>Peso</Text>
        <TextInput
          placeholder="Insira seu Peso"
          keyboardType="numeric"
          onChangeText={setWeight}
          value={weight}
        />
        <TouchableOpacity>
          <Text onPress={() => validationImc()}>{textButton}</Text>
        </TouchableOpacity>
      </View>
      <ResultImc messageResultImc={messageImc} imcResult={imc} />
    </View>
  );
}
