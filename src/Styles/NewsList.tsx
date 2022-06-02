import { StyleSheet, Dimensions } from "react-native";

// https://www.color-hex.com/color/8bb1ff
const width = Dimensions.get("window").width;

const NewsList_Styled = StyleSheet.create({
  NewsButton: {
    backgroundColor: "#8BB1FF",
    borderRadius: 10,
    width: width - 50,
    paddingVertical: 10,
    paddingHorizontal: 3,
    margin: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  NewsTitle: {
    flex: 1,
    fontSize: 15,
    color: "#fff",
  },
  NewsImg: {
    resizeMode: "contain",
    width: "150%",
    height: "150%",
  },
});

export default NewsList_Styled;
