/*
  npm install expo-cli
  npm install axios
  npm install react-native-modal
  npm install react-native-web
  npm i --save-dev @types/react-native-web
  npm install react-native-svg
  react-native link react-native-svg
*/

import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, Pressable } from "react-native";
import { useFetch } from "../Hooks/useFetch";
import { newsFetch } from "../Hooks/newsFetch";

import axios from "axios";

import NewsList from "./NewsList";
import Input from "./Input";
import NewsButton from "./NewsButton";

import { useEffect, useState } from "react";

let URL = "";
const pageSize = 15;

const App = () => {
  const [keyWord, setKeyWord] = useState("");
  const [newsData, setNewsData] = useState(null);
  const [saveNewsData, setSaveNewsData] = useState([]);
  const [headLineView, setHeadLineView] = useState(true);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);

  const _onSearch = (keyword) => {
    setKeyWord(keyword);
    setHeadLineView(false);
  };
  const _onSaveNews = (item) => {
    setSaveNewsData((saveNewsData) => [...saveNewsData, item]);
    console.log(saveNewsData);
    console.log("저장");
  };
  const _nextButton = () => {
    if (end == newsData?.articles.length) {
      alert("마지막 페이지 입니다.");
      console.log("마지막 페이지일껄요");
    } else {
      setStart(end);
      if (end + 5 > newsData?.articles.length) {
        setEnd(end + (end + 5 - newsData?.articles.length));
      } else {
        setEnd(end + 5);
      }
    }
  };
  const _prevButton = () => {
    if (start == 0) {
      alert("첫 페이지 입니다.");
      console.log("첫 페이지 입니다.");
    } else {
      setEnd(start);
      setStart(start - 5);
    }
  };

  useEffect(() => {
    if (headLineView) {
      URL =
        "https://newsapi.org/v2/top-headlines?country=kr&pageSize=" +
        pageSize +
        "&apiKey=4ff91c06afd04b30b3abc6e6d9b7658b";
    } else {
      URL =
        "https://newsapi.org/v2/everything?q=" +
        keyWord +
        "&sortBy=popularity&pageSize=" +
        pageSize +
        "&apiKey=4ff91c06afd04b30b3abc6e6d9b7658b";
    }
    const fetchData = async () => {
      try {
        const response = await axios({
          method: "get",
          url: URL,
          timeout: 2000,
        });
        setNewsData(response.data);
        console.log(newsData);
      } catch (error) {
        console.error(error);
      } finally {
        setStart(0);
        setEnd(5);
      }
    };

    fetchData();
  }, [keyWord, headLineView]);

  return (
    <SafeAreaView style={styles.container}>
      <NewsButton
        title={"이전"}
        _onNextButton={_nextButton}
        _onPrevButton={_prevButton}
      />
      <NewsButton
        title={"다음"}
        _onNextButton={_nextButton}
        _onPrevButton={_prevButton}
      />
      <Pressable onPress={() => setNewsData(saveNewsData)}>
        <Text>즐겨찾기</Text>
      </Pressable>

      {newsData?.articles.slice(start, end).map((item, index) => {
        return <NewsList key={index} item={item} onSaveNews={_onSaveNews} />;
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
