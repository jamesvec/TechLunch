import React, { Component } from "react";
import { ScrollView, Text, KeyboardAvoidingView, View } from "react-native";
import { connect } from "react-redux";
import { Colors } from "../Themes";
import RoundedButton from "../Components/RoundedButton";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from "./Styles/StackScreen1ScreenStyle";

class StackScreen1Screen extends Component {
  static navigationOptions: {
    title: "Screen 1"
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior="position">
          <Text
            style={{
              color: Colors.bloodOrange,
              fontSize: 40,
              flex: 2,
              textAlign: "center"
            }}
          >
            StackScreen 1
          </Text>
          <View style={{ alignItems: "center", flex: 1 }}>
            <RoundedButton
              onPress={() => {
                console.log(this.props);
                this.props.navigation.navigate({
                  routeName: "StackScreen2",
                  key: "StackScreen2",
                  params: {
                    title: "Screen 2"
                  }
                });
              }}
              title="stacks"
              style={{
                width: 200,
                bottom: 10
              }}
            >
              Show me stacks
            </RoundedButton>
          </View>
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
)(StackScreen1Screen);
