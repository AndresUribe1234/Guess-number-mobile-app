import { View, StyleSheet, Alert, Text, ScrollView } from "react-native";
import Title from "../components/Title";
import { useState, useEffect } from "react";
import NumberGuessed from "../components/NumberGuessed";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constants/color";
import { AntDesign } from "@expo/vector-icons";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = (props) => {
  const initialGuess = generateRandomBetween(1, 100, props.userNum);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [numberOfTurns, setNumberOfTurns] = useState(1);
  const [arrayOfGuesses, setArrayOfGuesses] = useState([]);

  useEffect(() => {
    if (Number(currentGuess) === Number(props.userNum)) {
      console.log("Game over should be triggered");
      props.onGameOver({ number: props.userNum, attempts: numberOfTurns });
    }
  }, [currentGuess, props.userNum, props.onGameOver]);

  useEffect(() => {
    console.log("component re rendered");
    minBoundary = 1;
    maxBoundary = 100;
    setNumberOfTurns(1);
  }, []);

  function nextGuessHandler(direction) {
    // Logic to generate alert if user instructions are incorrect regarding num lower or higher
    if (
      (direction === "lower" && currentGuess < props.userNum) ||
      (direction === "higher" && currentGuess > props.userNum)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    // Logic to generate new random number
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setNumberOfTurns((prev) => prev + 1);
    setArrayOfGuesses((prev) => [
      ...prev,
      { guess: currentGuess, direction: direction, round: numberOfTurns },
    ]);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberGuessed>{currentGuess}</NumberGuessed>
      <View style={styles.btnContainer}>
        <View style={styles.btnSize}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
            Higher
          </PrimaryButton>
        </View>
        <View style={styles.btnSize}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            Lower
          </PrimaryButton>
        </View>
      </View>
      <View style={styles.guessContainer}>
        <ScrollView>
          {arrayOfGuesses.map((ele, index) => (
            <View key={index} style={styles.guess}>
              <Text>{`Guess #${ele.round}: ${ele.guess} (too ${
                ele.direction === "lower" ? "high" : "low"
              })`}</Text>
              {ele.direction === "lower" ? (
                <AntDesign
                  name="arrowup"
                  size={20}
                  color={Colors.primaryBtnColor}
                />
              ) : (
                <AntDesign
                  name="arrowdown"
                  size={20}
                  color={Colors.primaryBtnColor}
                />
              )}
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 20,
  },
  btnContainer: { flexDirection: "row", gap: 20 },
  btnSize: { width: "40%" },
  guessContainer: { flex: 1, width: "100%" },
  guess: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.primaryContainerColor,
    borderRadius: 8,
    padding: 10,
    marginBottom: 30,
  },
});
