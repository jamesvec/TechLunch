import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles, Colors } from "../../Themes/";

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: 100,
    width: 300,
    resizeMode: "contain"
  },
  ingredients: {
    color: Colors.bloodOrange,
    textAlign: "center",
    fontSize: 24,
    fontStyle: "italic",
    marginTop: 24
  },
  centered: {
    alignItems: "center"
  }
});
