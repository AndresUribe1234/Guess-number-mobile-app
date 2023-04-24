import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/color";
import GameOver from "./screens/GameOverScreen";

export default function App() {
  const [number, setNumber] = useState();
  const [gameOver, setGameOver] = useState(false);
  const [gameResults, setGameResults] = useState({});

  const numberPickedHandler = (number) => {
    setNumber(number);
    console.log("Number picked:", number);
  };

  const gameOverHandler = (results) => {
    setGameOver(true);
    setGameResults({ number: results.number, attempts: results.attempts });
  };

  const playAgainHandler = () => {
    console.log("play again from home");
    setNumber(false);
    setGameOver(false);
  };

  return (
    <LinearGradient
      colors={[Colors.backgroundColorOne, Colors.backgroundColorTwo]}
      style={styles.container}
    >
      <ImageBackground
        source={require("./assets/images/nintendo-games.jpg")}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.container}>
          {!number && <StartGameScreen onPickNumber={numberPickedHandler} />}
          {number && !gameOver && (
            <GameScreen userNum={number} onGameOver={gameOverHandler} />
          )}
          {number && gameOver && (
            <GameOver onPlayAgain={playAgainHandler} results={gameResults} />
          )}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  backgroundImage: { opacity: 0.2 },
});
