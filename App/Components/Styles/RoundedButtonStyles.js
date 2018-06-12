import { StyleSheet } from "react-native";
import { Fonts, Colors, Metrics } from "../../Themes/";

export default StyleSheet.create({
  button: {
    height: 45,
    borderRadius: 5,
    marginHorizontal: Metrics.section,
    marginVertical: Metrics.baseMargin,
    backgroundColor: Colors.bloodOrange,
    justifyContent: "center"
  },
  buttonText: {
    color: Colors.white,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: Fonts.size.medium,
    marginVertical: Metrics.baseMargin
  }
});
