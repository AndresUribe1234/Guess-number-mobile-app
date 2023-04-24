import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/color";

const NumberGuessed = (props) => {
  return (
    <View style={styles.contaier}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
};

export default NumberGuessed;

const styles = StyleSheet.create({
  contaier: {
    padding: 24,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: Colors.primaryBtnColor,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    marginVertical: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.primaryBtnColor,
  },
});
