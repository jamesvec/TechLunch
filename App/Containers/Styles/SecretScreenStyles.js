import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Metrics, ApplicationStyles, Colors } from "../../Themes/";

const STATUS_HEIGHT = getStatusBarHeight();

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  secretRoot: {
    alignItems: "center",
    height: Metrics.screenHeight - (Metrics.navBarHeight + STATUS_HEIGHT),
    flex: 1,
    justifyContent: "space-between"
  },
  addButton: {
    width: 300,
    alignItems: "center"
  },
  addButtonText: {
    color: Colors.bloodOrange,
    fontWeight: "bold",
    fontSize: 20
  },
  addButtonImage: {
    width: 80,
    height: 80,
    marginBottom: 10
  },
  logoutContainer: {
    flex: 1,
    justifyContent: "center"
  },
  garyContainer: {
    flex: 2,
    maxHeight: 340
  },
  gary: {
    width: 300,
    height: 300,
    borderWidth: 5,
    borderColor: Colors.bloodOrange
  },
  addContainer: {
    flex: 1,
    width: Metrics.screenWidth
  }
});
