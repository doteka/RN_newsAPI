import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFetch } from "../Hooks/useFetch";

import NewsList from "./NewsList";
import Input from "./Input";
import { useEffect } from "react";
let URL =
  "https://newsapi.org/v2/everything?q=지선&sortBy=popularity&pageSize=5&apiKey=4ff91c06afd04b30b3abc6e6d9b7658b";

const _onSearch = (keyword) => {
  URL =
    "https://newsapi.org/v2/everything?q=" +
    keyword +
    "&sortBy=popularity&pageSize=5&apiKey=4ff91c06afd04b30b3abc6e6d9b7658b";

  console.log("C");
};

const App = () => {
  const { data, error, inProgress } = useFetch(URL);
  // let d = JSON.parse(data);
  console.log(data);

  return (
    <View style={styles.container}>
      {!inProgress &&
        data?.articles.map((item) => {
          return (
            <NewsList title={item.title} img={item.urlToImage} url={item.url} />
          );
        })}
      <Input Search={_onSearch} />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
