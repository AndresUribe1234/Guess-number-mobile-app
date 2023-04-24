import { Pressable, View, Text, StyleSheet } from "react-native";
import Colors from "../constants/color";

const PrimaryButton = (props) => {
  return (
    <Pressable onPress={props.onPress}>
      {({ pressed }) => {
        return (
          <View
            style={[
              styles.btn,
              !pressed
                ? { backgroundColor: Colors.primaryBtnColor }
                : { backgroundColor: Colors.primrayBtnClickedColor },
            ]}
          >
            <Text style={styles.buttonText}>{props.children}</Text>
          </View>
        );
      }}
    </Pressable>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primaryBtnColor,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
