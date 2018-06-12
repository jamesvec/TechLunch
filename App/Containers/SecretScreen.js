import React, { Component } from "react";
import {
  ScrollView,
  View,
  Text,
  Button,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  Animated
} from "react-native";
import RoundedButton from "../Components/RoundedButton";
import { Colors, Metrics, Images } from "../Themes";
import firebase from "react-native-firebase";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./Styles/SecretScreenStyles";
import LoginScreen from "./LoginScreen";
import PalomaReduxActions from "../Redux/PalomaRedux";

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

  handleClick = () => {
    console.log(this.props.addPaloma);
    this.props.addPaloma();
    //console.log(this.props.palomas);
  };

  renderSecret() {
    return (
      <View style={styles.secretRoot}>
        <View style={styles.garyContainer}>
          <Image
            resizeMode="contain"
            style={styles.gary}
            source={require("../Images/gary.jpg")}
          />
        </View>

        <View styles={styles.addContainer}>
          <TouchableOpacity style={styles.addButton} onPress={this.handleClick}>
            <View style={styles.addButton}>
              <Image style={styles.addButtonImage} source={Images.icon} />
              <Text style={styles.addButtonText}>OOPS I Palomaed again</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.logoutContainer}>
          <RoundedButton
            onPress={() => {
              firebase.auth().signOut();
            }}
            title="Logout"
            style={{
              width: 200,
              bottom: 10
            }}
          >
            Logout
          </RoundedButton>
        </View>
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
  return {
    palomas: state.paloma.palomas
  };
};

const mapDispatchToProps = {
  addPaloma: PalomaReduxActions.addPaloma
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SecretScreen);
