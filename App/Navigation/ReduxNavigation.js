import React from "react";
import { BackHandler, Platform } from "react-native";
import { createReduxBoundAddListener } from "react-navigation-redux-helpers";
import { connect } from "react-redux";
import AppNavigation from "./AppNavigation";
import { NavigationActions } from "react-navigation";

class ReduxNavigation extends React.Component {
  UNSAFE_componentWillMount() {
    if (Platform.OS === "ios") return;
    BackHandler.addEventListener("hardwareBackPress", () => {
      const { dispatch, nav } = this.props;
      // change to whatever is your first screen, otherwise unpredictable results may occur
      if (
        nav.routes.length === 1 &&
        nav.routes[0].routeName === "TabbedNavigation"
      ) {
        return false;
      }
      // if (shouldCloseApp(nav)) return false
      dispatch(NavigationActions.back());
      return true;
    });
  }

  componentWillUnmount() {
    if (Platform.OS === "ios") return;
    BackHandler.removeEventListener("hardwareBackPress");
  }

  render() {
    return (
      <AppNavigation
        navigation={{
          dispatch: this.props.dispatch,
          state: this.props.nav,
          addListener: createReduxBoundAddListener("root")
        }}
      />
    );
  }
}

const mapStateToProps = state => ({ nav: state.nav });
export default connect(mapStateToProps)(ReduxNavigation);
