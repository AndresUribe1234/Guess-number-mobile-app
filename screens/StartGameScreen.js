import { View, StyleSheet, TextInput, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/color";

const StartGameScreen = (props) => {
  const [inputValue, setInputValue] = useState("");

  const inputEnteredHandler = (enteredText) => {
    setInputValue(enteredText);
  };

  const resetHandler = () => {
    setInputValue("");
  };

  const addHandler = () => {
    const chosenNum = parseInt(inputValue);

    if (isNaN(chosenNum) || chosenNum <= 0 || chosenNum > 99) {
      Alert.alert("Invalid number!", "Number has to be btween 1 and 99.", [
        {
          text: "Okay",
          style: "destructive",
          onPress: resetHandler,
        },
      ]);

      return;
    }

    props.onPickNumber(inputValue);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        maxLength={2}
        keyboardType="number-pad"
        selectionColor={Colors.primaryBtnColor}
        onChangeText={inputEnteredHandler}
        value={inputValue}
      ></TextInput>
      <View style={styles.btnContainer}>
        <View style={styles.btnSize}>
          <PrimaryButton onPress={addHandler}>Add</PrimaryButton>
        </View>
        <View style={styles.btnSize}>
          <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primaryContainerColor,
    // Android shadow
    elevation: 4,
    // IOS shadow
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
  },
  btnContainer: { flexDirection: "row", gap: 10 },
  input: {
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.primaryBorderColor,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 12,
    width: "30%",
    textAlign: "center",
    fontSize: 20,
  },
  btnSize: { flex: 1 },
});
