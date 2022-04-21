import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  BackHandler,
  TextInput,
  Button,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  /*async componentDidMount() {
    const LoggedIn = await AsyncStorage.getItem('LoggedIn');
    if (LoggedIn == 'true') {
      this.props.navigation.navigate('Home');
    }
  } */
  render() {
    return (
      <ScrollView style={{backgroundColor: '#fff'}}>
        <Text></Text>
        <Text></Text>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{fontSize: 30, marginTop: 20, textAlign: 'center'}}></Text>
          <Text
            style={{fontSize: 30, marginTop: 20, textAlign: 'center'}}></Text>

          <TextInput
            value={this.state.email}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            selectionColor="black"
            underlineColor="black"
            underlineColorAndroid="black"
            style={{
              marginTop: 50,
              fontSize: 20,
              width: '75%',
              height: '17%',
              borderColor: '#009387',
              borderWidth: 3,
              borderRadius: 10,
              paddingHorizontal: 5,
            }}
            onChangeText={e => {
              this.setState({email: e});
            }}></TextInput>
          <TextInput
            value={this.state.password}
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry={true}
            selectionColor="black"
            underlineColor="black"
            underlineColorAndroid="black"
            style={{
              marginTop: 20,
              fontSize: 20,
              width: '75%',
              height: '17%',
              marginBottom: 25,
              borderColor: '#009387',
              borderWidth: 3,
              borderRadius: 10,
              paddingHorizontal: 5,
            }}
            onChangeText={e => {
              this.setState({password: e});
            }}></TextInput>
          <TouchableOpacity
            style={{
              backgroundColor: '#009387',
              borderColor: '#009387',
              borderWidth: 3,
              borderRadius: 10,
              width: '25%',
              height: '15%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={async () => {
              if (
                this.state.email == 'test@test.com' &&
                this.state.password == 'test123'
              ) {
                //   await AsyncStorage.setItem('LoggedIn', 'true');
                //  const thing = await AsyncStorage.getItem('LoggedIn');
                //  console.log(thing);
                this.props.navigation.navigate('Home');
              } else {
                alert('Wrong email or password.');
              }
            }}>
            <Text style={{color: '#fff', fontSize: 15}}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export default LoginScreen;
