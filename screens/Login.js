import React, { Component } from 'react'
import {
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Button
} from 'react-native'

import Firebase from '../config/Firebase';

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  handleLogin = () => {
    const { email, password } = this.state

    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Profile'))
      .catch(error => console.log(error))
  }

  render() {
    const { email, password } = this.state

    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <TextInput
          style={styles.inputBox}
          value={email}
          onChangeText={email => this.setState({ email })}
          placeholder='E-mail'
          autoCapitalize='none'
          keyboardType='email-address'
        />
        <TextInput
          style={styles.inputBox}
          value={password}
          onChangeText={password => this.setState({ password })}
          placeholder='Password'
          autoCapitalize='none'
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Button
          title="Don't have an account yet? Sign up"
          onPress={() => this.props.navigation.navigate('Signup')}
        />
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputBox: {
    width: '85%',
    margin: 10,
    padding: 10,
    fontSize: 16,
    borderColor: '#d3d3d3',
    borderBottomWidth: 1,
    textAlign: 'center'
  },
  button: {
    marginTop: 20,
    minHeight: 46,
    marginBottom: 20,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f6820d',
    borderRadius: 5,
    width: '85%'
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  }
})

export default Login