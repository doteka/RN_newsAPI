import React from "react";
import { Text, Image, Pressable } from "react-native";

import NewsList_Styled from "../Styles/NewsList";

const TEXT_MAX_LENGTH = 20;
const NewsList = ({ title, img, url }) => {
  const _onPress = () => {
    console.log(url);
  };
  return (
    <Pressable style={NewsList_Styled.NewsButton} onPress={_onPress}>
      <Text style={NewsList_Styled.NewsTitle}>
        {title.length < TEXT_MAX_LENGTH + 1
          ? `${title}`
          : `${title.substring(0, TEXT_MAX_LENGTH + 1)}`}
      </Text>
    </Pressable>
  );
};

export default NewsList;
