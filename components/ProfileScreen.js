import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  BackHandler,
} from 'react-native';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Profile Screen</Text>
      </View>
    );
  }
}

export default ProfileScreen;
