import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  formContext: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    paddingTop: 30,
    marginTop: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  form: {
    width: "100%",
  },
  formLabel: {
    color: "#000000",
    fontSize: 18,
    paddingLeft: 20,
    fontWeight: "bold",
  },
  input: {
    width: "90%",
    backgroundColor: "#f6f6f6",
    height: 40,
    marginLeft: 12,
    marginBottom: 12,
    paddingLeft: 10,
    borderRadius: 10,
  },
  buttonCalculator: {
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    backgroundColor: "#FF0043",
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 12,
    marginTop: 30,
  },
  textButtonCalculator: {
    fontSize: 20,
    color: "#ffffff",
  },
  errorMessage: {
    fontSize: 12,
    color: "#ff0043",
    fontWeight: "bold",
    paddingLeft: 20,
    marginBottom: 2,
  },
});
