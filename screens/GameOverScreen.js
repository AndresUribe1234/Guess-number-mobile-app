import { View, Text, StyleSheet, Image } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Colors from "../constants/color";

const GameOver = (props) => {
  const playAgainHandler = () => {
    console.log("Play again");
    props.onPlayAgain();
  };

  return (
    <View style={styles.screen}>
      <Title>Game is over!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("./../assets/images/success.jpg")}
          style={styles.image}
        />
      </View>

      <Text style={styles.textMsg}>
        {`Congratulations! You have correctly guessed the number ${props.results.number} in ${props.results.attempts} attempts.`}
      </Text>
      <PrimaryButton onPress={playAgainHandler}>Play Again!</PrimaryButton>
    </View>
  );
};

export default GameOver;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    gap: 20,
    marginTop: 50,
  },
  textMsg: { textAlign: "center" },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primaryBtnColor,
    overflow: "hidden",
  },
  image: { width: "100%", height: "100%" },
});
