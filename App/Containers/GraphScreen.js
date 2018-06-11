import React, { Component } from "react";
import { ScrollView, Text, KeyboardAvoidingView } from "react-native";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from "./Styles/GraphScreenStyle";

class GraphScreen extends Component {
  static navigationOptions = {
    tabBarIcon: () => <Icon name="signal" size={20} color="#FFF" />
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior="position">
          <Text>GraphScreen</Text>
        </KeyboardAvoidingView>
      </ScrollView>
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
)(GraphScreen);
