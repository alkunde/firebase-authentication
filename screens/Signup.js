import React, { Component } from 'react'
import { KeyboardAvoidingView, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native'

class Signup extends Component {
  state = {
    name: '',
    email: '',
    password: ''
  }

  render() {
    const { name, email, password } = this.state;

    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <TextInput
          style={styles.inputBox}
          value={name}
          onChangeText={name => this.setState({ name })}
          placeholder='Full Name'
          autoCapitalize='words'
        />
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
          secureTextEntry
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
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
    borderWidth: 1,
    textAlign: 'center'
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
    minHeight: 46,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFA611',
    borderRadius: 5,
    width: '85%'
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  }
})

export default Signup