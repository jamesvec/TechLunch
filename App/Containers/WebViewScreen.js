import React, { Component } from "react";
import {
  ScrollView,
  Text,
  KeyboardAvoidingView,
  WebView,
  View
} from "react-native";
import { connect } from "react-redux";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from "./Styles/WebViewScreenStyle";

class WebViewScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <WebView
          source={{ uri: "https://github.com/facebook/react-native" }}
          style={{ marginTop: 20, flex: 1 }}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WebViewScreen);
