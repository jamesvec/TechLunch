import React, { Component } from "react";
import { ScrollView, Text, KeyboardAvoidingView, View } from "react-native";
import { connect } from "react-redux";
import * as Animatable from "react-native-animatable";
import Icon from "react-native-vector-icons/FontAwesome";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from "./Styles/PalomaCountScreenStyle";

const DRUNK_COUNT = 4;

class PalomaCountScreen extends Component {
  static navigationOptions = {
    tabBarIcon: () => <Icon name="glass" size={20} color="#FFF" />
  };

  render() {
    const tense = this.props.palomas === 1 ? "Paloma" : "Palomas";
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior="position">
          <View style={styles.textContainer}>
            <Animatable.Text
              duration={15000}
              animation={this.props.palomas > DRUNK_COUNT ? "swing" : null}
              easing="ease-out"
              iterationCount="infinite"
              style={styles.topText}
            >
              Gary has had
            </Animatable.Text>
            <Animatable.Text
              style={styles.count}
              duration={13000}
              animation={this.props.palomas > DRUNK_COUNT ? "swing" : null}
              easing="ease-out"
              iterationCount="infinite"
            >
              {this.props.palomas}
            </Animatable.Text>
            <Animatable.Text
              style={styles.bottomText}
              duration={13000}
              animation={this.props.palomas > DRUNK_COUNT ? "swing" : null}
              easing="ease-out"
              iterationCount="infinite"
            >
              {tense} Today
            </Animatable.Text>
            {this.props.palomas === 0 && <Text style={styles.frown}>:(</Text>}
          </View>
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

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PalomaCountScreen);
