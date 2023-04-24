import { View, StyleSheet } from "react-native";
import Title from "../components/Title";
import { useState } from "react";
import NumberGuessed from "../components/NumberGuessed";
import PrimaryButton from "../components/PrimaryButton";

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
  const initialGuess = generateRandomBetween(
    minBoundary,
    maxBoundary,
    props.userNum
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberGuessed>{currentGuess}</NumberGuessed>
      <View style={styles.btnContainer}>
        <View style={styles.btnSize}>
          <PrimaryButton>Higher</PrimaryButton>
        </View>
        <View style={styles.btnSize}>
          <PrimaryButton>Lower</PrimaryButton>
        </View>
      </View>
      <View></View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 24, alignItems: "center" },
  btnContainer: { flex: 1, flexDirection: "row", gap: 20 },
  btnSize: { width: "40%" },
});
