import { View, StyleSheet, TextInput, Alert, Text } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/color";
import Title from "../components/Title";

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
    <View style={styles.screen}>
      <Title>Guess My Number</Title>
      <View style={styles.container}>
        <Text style={styles.labelText}>Enter A Number</Text>
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
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    marginTop: 50,
    gap: 20,
  },
  container: {
    gap: 20,
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
    width: 80,
    textAlign: "center",
    fontSize: 20,
  },
  btnSize: { flex: 1 },
  labelText: {
    fontWeight: "bold",
  },
});
