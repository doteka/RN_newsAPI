import React, { useState } from "react";
import { Text, Image, Pressable } from "react-native";
import Modal from "react-native-modal";

import NewsList_Styled from "../Styles/NewsList";

const TEXT_MAX_LENGTH = 20;
const HighlightKeyword = "손흥민";
const NewsList = ({ index, item, onSaveNews }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const _onPress = () => {
    console.log(item.url);
    setModalVisible(true);
  };
  return (
    <Pressable style={NewsList_Styled.NewsButton} onPress={_onPress}>
      <Modal
        isVisible={modalVisible}
        style={[
          {
            width: 300,
            height: 300,
            backgroundColor: "#D0DFFF",
            alignItems: "center",
            justifyContent: "center",
          },
        ]}
      >
        <Pressable>
          <Text
            style={{ marginHorizontal: 30 }}
            onPress={() => onSaveNews(item)}
          >
            즐겨찾기
          </Text>
          <Text
            style={{ alignItems: "center", justifyContent: "center" }}
            onPress={() => setModalVisible(false)}
          >
            닫기
          </Text>
        </Pressable>
      </Modal>
      <Text
        key={index}
        style={[
          NewsList_Styled.NewsTitle,
          { color: item.title.includes(HighlightKeyword) ? "yellow" : "white" },
        ]}
      >
        {item.title.length < TEXT_MAX_LENGTH + 1
          ? `${item.title}`
          : `${item.title.substring(0, TEXT_MAX_LENGTH + 1)}`}
      </Text>
    </Pressable>
  );
};

export default NewsList;
