import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }}></Image>
      <Text numberOfLines={1} style={styles.name}>
        {result.name}
      </Text>
      <Text numberOfLines={1} style={(styles.name, { fontWeight: "normal" })}>
        {result.rating} Starts, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    height: 190,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 4,
    marginBottom: 5,
    borderRadius: 3,
  },
  name: {
    fontWeight: "bold",
    fontSize: 14,
  },
});
export default ResultsDetail;
