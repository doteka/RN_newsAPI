import React from 'react'
import { Pressable, Text } from 'react-native'
import NewsButton_Styeled from '../Styles/NewsButton'

const NewsButton = ({title, _onNextButton, _onPrevButton}) => {
    return (
        <Pressable style={NewsButton_Styeled.Button} onPress={() =>{title=="다음"? _onNextButton() : _onPrevButton()}} >
            <Text style={NewsButton_Styeled.ButtonText}>{title}</Text>
        </Pressable>
    )
}
export default NewsButton