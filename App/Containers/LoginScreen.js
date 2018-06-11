import React, { Component } from "react";
import firebase from "react-native-firebase";
import { TouchableOpacity, Image, Text, TextInput, View } from "react-native";
import styles from "./Styles/LoginScreenStyles";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginEmail: "",
      loginPassword: "",
      registerEmail: "",
      registerPassword: "",
      registerPassword2: "",
      invalidUser: false
    };
  }

  attemptLogin = (email, password) => {
    this.setState({
      invalidUser: false
    });
    firebase
      .auth()
      .signInAndRetrieveDataWithEmailAndPassword(email, password)
      .then(user => {})
      .catch(error => {
        const { code, message } = error;
        this.setState({
          invalidUser: true
        });
      });
  };

  login = () => {
    const { loginEmail, loginPassword } = this.state;
    if (loginEmail === "" || loginPassword === "") {
      return;
    }
    this.attemptLogin(loginEmail, loginPassword);
  };

  register = () => {
    const { registerEmail, registerPassword, registerPassword2 } = this.state;
    let that = this;
    if (
      registerEmail === "" ||
      registerPassword === "" ||
      registerPassword2 === ""
    ) {
      return;
    }

    if (registerPassword !== registerPassword2) {
      return;
    }

    this.setState({
      error: null
    });

    firebase
      .auth()
      .createUserWithEmailAndPassword(registerEmail, registerPassword)
      .then(user => {
        that.attemptLogin(registerEmail, registerPassword);
      })
      .catch(error => {
        const { code, message } = error;
        this.setState({
          error: message
        });
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.headline}>Login</Text>
          {this.state.invalidUser && (
            <Text style={styles.error}>Invalid user</Text>
          )}
          <TextInput
            style={styles.input}
            placeholder="Email address"
            onChangeText={loginEmail => this.setState({ loginEmail })}
            keyboardType="email-address"
            value={this.state.email}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={loginPassword => this.setState({ loginPassword })}
            secureTextEntry
            value={this.state.password}
          />
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.button} onPress={this.login}>
              <Text style={styles.registerText}>Login</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.register}>or Register</Text>
          {this.state.error && (
            <Text style={styles.error}>{this.state.error}</Text>
          )}
          <TextInput
            style={styles.input}
            placeholder="Email address"
            autoCorrect={false}
            onChangeText={registerEmail => this.setState({ registerEmail })}
            keyboardType="email-address"
            value={this.state.email}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={registerPassword =>
              this.setState({ registerPassword })
            }
            secureTextEntry
            autoCorrect={false}
            clearButtonMode="while-editing"
            value={this.state.password}
          />
          <TextInput
            style={styles.input}
            placeholder="Verify Password"
            onChangeText={registerPassword2 =>
              this.setState({ registerPassword2 })
            }
            secureTextEntry
            autoCorrect={false}
            clearButtonMode="while-editing"
            value={this.state.password2}
          />
          <TouchableOpacity style={styles.button} onPress={this.register}>
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default LoginScreen;
