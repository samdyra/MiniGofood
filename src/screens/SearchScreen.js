import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";
import ResultLists from "../components/ResultsLists";

const SearchScreen = () => {
  // console.log(props);
  const [term, setTerm] = useState("");
  const [searchApi, results, error] = useResults();
  const filterResultByPrice = (prices) => {
    return results.filter(({ price }) => {
      return price === prices;
    });
  };
  return (
    <ScrollView>
      <>
        <Text style={styles.title}>Kamerad-Food</Text>
        <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)}></SearchBar>
        {error ? <Text>{error}</Text> : null}
        <ResultLists results={filterResultByPrice("$")} title="Cost Effective"></ResultLists>
        <ResultLists results={filterResultByPrice("$$")} title="Pricey"></ResultLists>
        <ResultLists results={filterResultByPrice("$$$")} title="Spender"></ResultLists>
        <ResultLists results={filterResultByPrice("$$$$")} title="Big Spender"></ResultLists>
      </>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginLeft: 20,
    marginTop: 38,
  },
});

SearchScreen.navigationOptions = {
  headerShown: false,
};

export default SearchScreen;
