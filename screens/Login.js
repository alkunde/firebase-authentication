import React, { Component } from 'react'
import {
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Button
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, login } from '../actions/user'

class Login extends Component {
  handleLogin = () => {
    this.props.login()
    this.props.navigation.navigate('Profile')
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <TextInput
          style={styles.inputBox}
          value={this.props.user.email}
          onChangeText={email => this.props.updateEmail(email)}
          placeholder='E-mail'
          autoCapitalize='none'
          keyboardType='email-address'
        />
        <TextInput
          style={styles.inputBox}
          value={this.props.user.password}
          onChangeText={password => this.props.updatePassword(password)}
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

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateEmail, updatePassword, login }, dispatch)

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)