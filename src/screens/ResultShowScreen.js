import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const [result, setResult] = useState(null);
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
    // console.log(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
    // !result is the same as result == null
  }

  return (
    <>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }}></Image>;
        }}
      ></FlatList>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
  },
});

export default ResultShowScreen;
