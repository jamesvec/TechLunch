import { createStackNavigator } from "react-navigation";
import TabbedNavigation from "./TabbedNavigation";
import StackNavigation from "./StackNavigation";
import { Colors, Metrics } from "../Themes";
import { getStatusBarHeight } from "react-native-status-bar-height";

const STATUS_HEIGHT = getStatusBarHeight();

const PrimaryNav = createStackNavigator(
  {
    TabbedNavigation: {
      screen: TabbedNavigation,
      navigationOptions: {
        header: null
      }
    },
    StackNavigation: {
      screen: StackNavigation,
      navigationOptions: ({ navigation }) => {
        console.log(navigation);
        return {
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: Colors.bloodOrange,
            height: Metrics.navBarHeight + STATUS_HEIGHT
          }
        };
      }
    }
  },
  {
    headerMode: "screen",
    initialRouteName: "TabbedNavigation"
  }
);

export default PrimaryNav;
