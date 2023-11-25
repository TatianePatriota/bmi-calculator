import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { Share } from "react-native";

export default function ResultImc(props) {
  const onShare = async () => {
    const result = await Share.share({
      message: "Meu IMC hoje é: " + props.imcResult,
    });
  };
  return (
    <View style={styles.resultImc}>
      <View style={styles.boxSharebutton}>
        <TouchableOpacity style={styles.shared} onPress={onShare}>
          <Text style={styles.sharedText}>Compartilhar</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.information}>{props.messageResultImc}</Text>
      <Text style={styles.numberImc}>{props.imcResult}</Text>
    </View>
  );
}
