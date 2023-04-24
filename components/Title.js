import { Text, StyleSheet } from "react-native";
import Colors from "../constants/color";

const Title = (props) => {
  return <Text style={styles.title}>{props.children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.primaryContainerColor,
    padding: 8,
    width: "100%",
  },
});
