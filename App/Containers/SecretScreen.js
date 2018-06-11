import React, { Component } from "react";
import {
  ScrollView,
  View,
  Text,
  Button,
  Image,
  KeyboardAvoidingView
} from "react-native";
import { Colors } from "../Themes";
import firebase from "react-native-firebase";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./Styles/SecretScreenStyles";
import LoginScreen from "./LoginScreen";

class SecretScreen extends Component {
  static navigationOptions = {
    tabBarIcon: () => <Icon name="lock" size={20} color="#FFF" />
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.authSubscription = firebase.auth().onAuthStateChanged(user => {
      this.setState({
        loading: false,
        user
      });
    });
  }

  renderSecret() {
    return (
      <View>
        <Image
          resizeMode="contain"
          style={styles.gary}
          source={require("../Images/gary.jpg")}
        />
        <Button
          onPress={() => {
            firebase.auth().signOut();
          }}
          title="Logout"
          color={Colors.bloodOrange}
        />
      </View>
    );
  }

  render() {
    const { loading, user } = this.state;
    let screenToShow = <LoginScreen />;
    if (loading) {
      screenToShow = null;
    }
    if (user) {
      screenToShow = this.renderSecret();
    }
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior="position">
          {screenToShow}
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
)(SecretScreen);
