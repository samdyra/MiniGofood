import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle}></Feather>
      <TextInput placeholder="Search" style={styles.inputStyle} value={term} onChangeText={onTermChange} onEndEditing={onTermSubmit}></TextInput>
    </View>
  );
};
const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "rgb(219, 219, 219)",
    height: 50,
    borderRadius: 10,
    marginHorizontal: 17,
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 28,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;
