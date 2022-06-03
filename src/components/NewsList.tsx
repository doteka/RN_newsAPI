import React, { useState } from "react";
import { Text, Image, Pressable } from "react-native";
import Modal from 'react-native-modal'
import { WebView } from 'react-native-web'

import NewsList_Styled from "../Styles/NewsList";

const TEXT_MAX_LENGTH = 20;
const NewsList = ({ index, title, img, url }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const _onPress = () => {
    console.log(url);
    setModalVisible(true)
  };
  return (
    <Pressable style={NewsList_Styled.NewsButton} onPress={_onPress}>
      <Modal isVisible={modalVisible} style={[{width: 300, height:300, backgroundColor:"#D0DFFF", alignItems: 'center', justifyContent:'center'}]}>
        <WebView source={{uri: url}}/>
        <Pressable onPress={()=>setModalVisible(false)}>
          <Text>닫기</Text>
        </Pressable>
      </Modal>
      <Text key={index} style={NewsList_Styled.NewsTitle}>
        {title.length < TEXT_MAX_LENGTH + 1
          ? `${title}`
          : `${title.substring(0, TEXT_MAX_LENGTH + 1)}`}
      </Text>
    </Pressable>
  );
};

export default NewsList;
