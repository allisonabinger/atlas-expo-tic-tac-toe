import { StatusBar } from "expo-status-bar";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors } from "./Colors";
import { useGameState } from "./useGameState";

const X = require("../assets/X.png");
const O = require("../assets/O.png");

export default function Game() {
  const { square, colors, winner, handleClick, reset } = useGameState();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Atlas</Text>
    </View>
  );
}

//S tyles Go Here
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blue,
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
});
