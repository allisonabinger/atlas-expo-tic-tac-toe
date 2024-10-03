import { StatusBar } from "expo-status-bar";
import {
    Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors } from "./Colors";
import { useGameState } from "./useGameState";
import Ximg from "../assets/X.png";
import Oimg from "../assets/O.png";

const X = require("../assets/X.png");
const O = require("../assets/O.png");

export default function Game() {
  const { square, colors, winner, handleClick, reset } = useGameState();

  return (
    <View style={styles.container}>

      <View style={styles.board}>
          <View style={styles.row}>
            <Pressable style={styles.cell} onPress={() => handleClick(0)}>

                {square[0] && (square[0] === 'X' ? <Image style={styles.image} source={Ximg} resizeMode="contain"></Image> : 
                <Image style={styles.image} source={Oimg} resizeMode="contain"></Image>)}
            </Pressable>
            <Pressable style={styles.cell} onPress={() => handleClick(1)}>
                {square[1] && (square[1] === 'X' ? <Image style={styles.image} source={Ximg} resizeMode="contain"></Image> : 
                <Image style={styles.image} source={Oimg} resizeMode="contain"></Image>)}
            </Pressable>
            <Pressable style={styles.cell} onPress={() => handleClick(2)}>
                {square[2] && (square[2] === 'X' ? <Image style={styles.image} source={Ximg} resizeMode="contain"></Image> : 
                <Image style={styles.image} source={Oimg} resizeMode="contain"></Image>)}
            </Pressable>
          </View>
          <View style={styles.row}>
            <Pressable style={styles.cell} onPress={() => handleClick(3)}>
                {square[3] && (square[3] === 'X' ? <Image style={styles.image} source={Ximg} resizeMode="contain"></Image> : 
                <Image style={styles.image} source={Oimg} resizeMode="contain"></Image>)}
            </Pressable>
            <Pressable style={styles.cell} onPress={() => handleClick(4)}>
                {square[4] && (square[4] === 'X' ? <Image style={styles.image} source={Ximg} resizeMode="contain"></Image> : 
                <Image style={styles.image} source={Oimg} resizeMode="contain"></Image>)}
            </Pressable>
            <Pressable style={styles.cell} onPress={() => handleClick(5)}>
                {square[5] && (square[5] === 'X' ? <Image style={styles.image} source={Ximg} resizeMode="contain"></Image> : 
                <Image style={styles.image} source={Oimg} resizeMode="contain"></Image>)}
            </Pressable>
          </View>
          <View style={styles.row}>
            <Pressable style={styles.cell} onPress={() => handleClick(6)}>
                {square[6] && (square[6] === 'X' ? <Image style={styles.image} source={Ximg} resizeMode="contain"></Image> : 
                <Image style={styles.image} source={Oimg} resizeMode="contain"></Image>)}
            </Pressable>
            <Pressable style={styles.cell} onPress={() => handleClick(7)}>
                {square[7] && (square[7] === 'X' ? <Image style={styles.image} source={Ximg} resizeMode="contain"></Image> : 
                <Image style={styles.image} source={Oimg} resizeMode="contain"></Image>)}
            </Pressable>
            <Pressable style={styles.cell} onPress={() => handleClick(8)}>
                {square[8] && (square[8] === 'X' ? <Image style={styles.image} source={Ximg} resizeMode="contain"></Image> : 
                <Image style={styles.image} source={Oimg} resizeMode="contain"></Image>)}
            </Pressable>
          </View>
          <Pressable onPress={() => reset()} style={styles.button}><Text style={styles.buttonText}>Restart</Text></Pressable>
      </View>
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
    padding: 0,
    width: 'auto',
    height: 'auto',
    // justifyContent: "space-between",
    // marginTop: 3,
  },
  board: {
    width: 'auto',
    // height: 800,
    // height: auto,
    marginTop: 250,
    marginBottom: 225,
    // marginLeft: 0,
    // marginRight: 0,
    // borderWidth: 5,
    // borderColor: Colors.teal,
    padding: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  text: {
    color: "#fff",
  },
  row: {
    flex: .5,
    flexDirection: 'row',
    width: 'auto',
    // borderWidth: 5,
    // borderColor: Colors.teal,
    margin: 0,
  },
  pressable: {
        flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cell: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.blueLight,
    borderWidth: 1,
    borderColor: Colors.teal,
    padding: 10,

  },
  image: {
    flex: 1
  },
  button: {
    marginTop: 25,
    backgroundColor: Colors.teal,
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
  }
});
