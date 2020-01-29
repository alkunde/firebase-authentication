import React, { Component } from 'react'
import {
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, signup } from '../actions/user'

class Signup extends Component {
  handleSignUp = () => {
    this.props.signup()
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
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
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
    borderBottomWidth: 1,
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

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateEmail, updatePassword, signup }, dispatch)

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)