import React, { Component } from "react";
import { ScrollView, Text, Image, View } from "react-native";
import { Images } from "../Themes";
import Icon from "react-native-vector-icons/FontAwesome";

// Styles
import styles from "./Styles/LaunchScreenStyles";

export default class LaunchScreen extends Component {
  static navigationOptions = {
    tabBarIcon: () => <Icon name="rocket" size={20} color="#FFF" />
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.section}>
            <Image style={styles.logo} source={Images.logo} />
            <Text style={styles.ingredients}>
              Grapefruit.{"\n"}Lime.{"\n"}Sugar.{"\n"}Taquilla.{"\n"}Soda.{"\n"}Gary.
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
