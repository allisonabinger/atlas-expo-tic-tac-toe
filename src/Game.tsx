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
      <Text style={styles.heading}>Tic-Tac-Toe</Text>
      <StatusBar style="auto" />
      <View style={styles.row}>
        <Cell
          color={colors[0]}
          value={square[0]}
          onClick={() => handleClick(0)}
        />
        <Cell
          color={colors[1]}
          value={square[1]}
          onClick={() => handleClick(1)}
        />
        <Cell
          color={colors[2]}
          value={square[2]}
          onClick={() => handleClick(2)}
        />
      </View>
      <View style={styles.row}>
        <Cell
          color={colors[3]}
          value={square[3]}
          onClick={() => handleClick(3)}
        />
        <Cell
          color={colors[4]}
          value={square[4]}
          onClick={() => handleClick(4)}
        />
        <Cell
          color={colors[5]}
          value={square[5]}
          onClick={() => handleClick(5)}
        />
      </View>
      <View style={styles.row}>
        <Cell
          color={colors[6]}
          value={square[6]}
          onClick={() => handleClick(6)}
        />
        <Cell
          color={colors[7]}
          value={square[7]}
          onClick={() => handleClick(7)}
        />
        <Cell
          color={colors[8]}
          value={square[8]}
          onClick={() => handleClick(8)}
        />
      </View>
      <View style={{ flex: 0, marginTop: 16, marginLeft: 32, marginRight: 32 }}>
        {winner && (
          <TouchableOpacity style={styles.restart} onPress={reset}>
            <Text style={{ textAlign: "center" }}>Restart</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

function Cell({ color, value, onClick }) {
  return (
    <View style={{ ...styles.cell, backgroundColor: Colors[color] }}>
      {value && <Image style={styles.image} source={value === "X" ? X : O} />}
      {!value && (
        <Pressable style={{ ...styles.button }} onPress={onClick}>
          <Text></Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blue,
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    color: "#FFF",
    fontSize: 48,
    fontWeight: "bold",
  },
  restart: {
    backgroundColor: Colors.teal,
    borderRadius: 8,
    padding: 8,
  },
  button: {
    width: "100%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  board: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: Colors.blueLight,
    borderColor: Colors.teal,
    borderWidth: 1,
  },
  cell: {
    borderColor: Colors.teal,
    borderWidth: 1,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    aspectRatio: 1,

    // width: "100%"
  },
});
