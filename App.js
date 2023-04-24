import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/color";

export default function App() {
  const [number, setNumber] = useState();

  const numberPickedHandler = (number) => {
    setNumber(number);
    console.log("Number picked:", number);
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
          {number && <GameScreen userNum={number} />}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  backgroundImage: { opacity: 0.2 },
});
