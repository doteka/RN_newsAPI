import React, { useState } from "react";
import { TextInput } from "react-native";

const Input = ({ Search }) => {
  const [keyWord, setKeyWord] = useState("");
  return (
    <TextInput
      onChangeText={(text) => setKeyWord(text)}
      onSubmitEditing={Search(keyWord)}
      placeholder="검색어를 입력해주세요"
    />
  );
};

export default Input;
