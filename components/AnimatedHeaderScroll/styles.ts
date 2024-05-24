import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");
const getStyles = (insets, IMG_HEIGHT) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFF",
    },
    statusBarContainer: {
      height: insets.top,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 999,
    },

    scrollArea: {
      height: 2000,
      backgroundColor: "#d3d3d3",
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      marginTop: -50,
      padding: 10,
    },
    heading: {
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
      marginTop: 20,
    },
    text: {
      color: "black",
      fontSize: 16,
      textAlign: "justify",
      marginTop: 10,
    },
    image: {
      width: width,
      height: IMG_HEIGHT,
    },
    header: {
      backgroundColor: "#fff",
      height: 100,
      justifyContent: "flex-end",
      alignItems: "center",
    },
    customHeader: {
      width: "100%",
      zIndex: 2,
      position: "absolute",
      top: insets.top,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
    },
  });

export default getStyles;
