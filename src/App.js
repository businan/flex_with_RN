import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.redBox}>
        <View style={styles.greyBox}>
          <View style={styles.orangeBox}>
            <Text style={styles.topContainerText}>Orange Circle</Text>
          </View>
          <View style={styles.yellowBox}>
            <Text style={styles.topContainerText}>Yellow Box</Text>
          </View>
        </View>
      </View>
      <View style={styles.pinkBox}>
        <View style={styles.blackBox}>
          <Text style={styles.buttomContainerText}>Black Box</Text>
        </View>
        <View style={styles.brownBox}>
          <Text
            style={[
              styles.buttomContainerText,
              { transform: [{ rotate: "270deg" }] }
            ]}
          >
            Brown{"\n"}Box
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: { flex: 1 },
  redBox: { backgroundColor: "#FD0904", flex: 2 },
  greyBox: {
    backgroundColor: "#808080",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 20,
    borderRadius: 10
  },
  orangeBox: {
    backgroundColor: "#FEA500",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 70,
    paddingLeft: 1,
    paddingRight: 1
  },
  yellowBox: {
    backgroundColor: "#FAFA02",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    padding: 10
  },
  topContainerText: { fontWeight: "bold", fontSize: 16 },
  pinkBox: { backgroundColor: "#FFC0CA", flex: 4, flexDirection: "row" },
  blackBox: {
    flex: 3,
    backgroundColor: "#010101",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    margin: 30
  },
  brownBox: {
    flex: 1,
    backgroundColor: "#A42A29",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    margin: 20
  },
  buttomContainerText: { color: "white", fontWeight: "bold", fontSize: 18 }
});
