import { createStackNavigator } from "react-navigation";
import StackScreen1 from "../Containers/StackScreen1";
import StackScreen2 from "../Containers/StackScreen2";
import WebViewScreen from "../Containers/WebViewScreen";
import { getStatusBarHeight } from "react-native-status-bar-height";

const STATUS_HEIGHT = getStatusBarHeight();

const PrimaryStack = createStackNavigator(
  {
    StackScreen1: { screen: StackScreen1 },
    StackScreen2: { screen: StackScreen2 },
    WebViewScreen: { screen: WebViewScreen }
  },
  {
    headerMode: "none",
    // Default config for all screens
    initialRouteName: "StackScreen1"
  }
);

export default PrimaryStack;
