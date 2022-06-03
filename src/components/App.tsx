import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Button,
  Pressable,
} from "react-native";
import { useFetch } from "../Hooks/useFetch";
import { newsFetch } from "../Hooks/newsFetch";

import axios from "axios";

import NewsList from "./NewsList";
import Input from "./Input";
import { useEffect, useState } from "react";

let URL = "";

const App = () => {
  const [keyWord, setKeyWord] = useState("");
  const [newsData, setNewsData] = useState(null);
  const [headLineView, setHeadLineView] = useState(true);
  // let { data, error, inProgress } = useFetch(URL);
  const _onSearch = (keyword) => {
    setKeyWord(keyword);
    setHeadLineView(false);
  };

  useEffect(() => {
    if (headLineView) {
      URL =
        "https://newsapi.org/v2/top-headlines?country=kr&pageSize=5&apiKey=4ff91c06afd04b30b3abc6e6d9b7658b";
    } else {
      URL =
        "https://newsapi.org/v2/everything?q=" +
        keyWord +
        "&sortBy=popularity&pageSize=5&apiKey=4ff91c06afd04b30b3abc6e6d9b7658b";
    }
    const fetchData = async () => {
      try {
        const response = await axios({
          method: "get",
          url: URL,
          timeout: 2000,
        });
        setNewsData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [keyWord, headLineView]);

  return (
    <SafeAreaView style={styles.container}>
      {newsData?.articles.map((item) => {
        return (
          <NewsList title={item.title} img={item.urlToImage} url={item.url} />
        );
      })}
      <Input Search={_onSearch} />
      <Pressable style={styles.mainBtn}>
        <Text
          onPress={() => {
            console.log("C");
            setHeadLineView(true);
          }}
        >
          메인으로 가기
        </Text>
      </Pressable>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mainBtn: {
    backgroundColor: "#D0DFFF",
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
    margin: 3,
  },
});

export default App;
