import { createMaterialTopTabNavigator } from "react-navigation";
import LaunchScreen from "../Containers/LaunchScreen";
import GraphScreen from "../Containers/GraphScreen";
import StackScreen from "../Containers/StackScreen";
import SecretScreen from "../Containers/SecretScreen";
import styles from "./Styles/NavigationStyles";
import { Metrics } from "../Themes";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Colors } from "../Themes";

const STATUS_HEIGHT = getStatusBarHeight();

const PrimaryNav = createMaterialTopTabNavigator(
  {
    LaunchScreen: { screen: LaunchScreen },
    GraphScreen: { screen: GraphScreen },
    StackScreen: { screen: StackScreen },
    SecretScreen: { screen: SecretScreen }
  },
  {
    // Default config for all screens
    tabBarPosition: "top",
    scrollEnabled: false,
    animationEnabled: true,
    swipeEnabled: false,
    initialRouteName: "LaunchScreen",
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      style: {
        height: Metrics.navBarHeight + STATUS_HEIGHT,
        justifyContent: "center",
        paddingTop: STATUS_HEIGHT,
        backgroundColor: Colors.bloodOrange
      }
    }
  }
);

export default PrimaryNav;
