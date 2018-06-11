import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles, Colors } from "../../Themes/";

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 25
  },
  headline: {
    fontSize: 22,
    color: Colors.bloodOrange
  },
  error: {
    color: "#ff0000",
    fontStyle: "italic"
  },
  form: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    height: 40,
    borderColor: Colors.bloodOrange,
    color: Colors.bloodOrange,
    borderWidth: 1,
    width: 320,
    padding: 10,
    marginTop: 20
  },
  button: {
    marginTop: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20,
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: Colors.bloodOrange
  },
  buttons: {
    flexDirection: "row"
  },
  registerText: {
    color: "#ffffff"
  },
  register: {
    marginTop: 25,
    fontSize: 22,
    color: Colors.bloodOrange
  }
});
