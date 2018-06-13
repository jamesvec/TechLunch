import { createMaterialTopTabNavigator } from "react-navigation";
import LaunchScreen from "../Containers/LaunchScreen";
import GraphScreen from "../Containers/GraphScreen";
import PalomaCountScreen from "../Containers/PalomaCountScreen";
import SecretScreen from "../Containers/SecretScreen";
import styles from "./Styles/NavigationStyles";
import { Metrics, Colors } from "../Themes";
import { getStatusBarHeight } from "react-native-status-bar-height";

const STATUS_HEIGHT = getStatusBarHeight();

const PrimaryNav = createMaterialTopTabNavigator(
  {
    LaunchScreen: { screen: LaunchScreen },
    GraphScreen: { screen: GraphScreen },
    PalomaCountScreen: { screen: PalomaCountScreen },
    SecretScreen: { screen: SecretScreen }
  },
  {
    // Default config for all screens
    tabBarPosition: "top",
    scrollEnabled: false,
    animationEnabled: true,
    swipeEnabled: true,
    initialRouteName: "LaunchScreen",
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      indicatorStyle: {
        backgroundColor: Colors.white
      },
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
