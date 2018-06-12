import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles, Colors, Fonts } from "../../Themes/";

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  textContainer: {
    alignItems: "center",
    paddingVertical: 40,
    paddingHorizontal: 20
  },
  topText: {
    color: Colors.bloodOrange,
    fontSize: 30,
    fontWeight: "bold"
  },
  count: {
    color: Colors.bloodOrange,
    fontSize: 250,
    fontFamily: Fonts.type.bold
  },
  bottomText: {
    fontSize: 30,
    color: Colors.bloodOrange,
    fontWeight: "bold"
  },
  frown: {
    fontSize: 30,
    color: Colors.bloodOrange,
    fontWeight: "bold"
  }
});
