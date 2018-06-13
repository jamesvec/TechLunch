import React, { Component } from "react";
import { ScrollView, Text, Image, View } from "react-native";
import { Images } from "../Themes";
import RoundedButton from "../Components/RoundedButton";
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
              Grapefruit.{"\n"}Lime.{"\n"}Tequila.{"\n"}Soda.{"\n"}Gary.
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <RoundedButton
              onPress={() => {
                console.log(this.props);
                this.props.navigation.navigate({
                  routeName: "StackScreen1",
                  key: "StackScreen1",
                  params: {
                    title: "Screen 1"
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
        </ScrollView>
      </View>
    );
  }
}
