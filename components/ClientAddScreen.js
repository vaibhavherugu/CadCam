import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  BackHandler,
  TextInput,
} from 'react-native';
import axios from 'axios';

class ClientAddScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: '',
      phone_number: '',
    };
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginBottom: 7,
          }}>
          <Text style={{fontSize: 18, marginBottom: 7}}>Client Name:</Text>
          <TextInput
            value={this.state.CadCost}
            placeholder="Enter"
            autoCapitalize="none"
            selectionColor="black"
            underlineColor="black"
            underlineColorAndroid="black"
            keyboardType="numeric"
            style={{
              fontSize: 20,
              width: '45%',
              height: '100%',
              marginTop: -2,
              borderColor: '#F5AE2F',
              borderWidth: 2,
              marginLeft: 5,
              borderRadius: 10,
              paddingHorizontal: 5,
            }}
            onChangeText={e => {
              this.setState({label: e});
            }}></TextInput>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginBottom: 7,
          }}>
          <Text style={{fontSize: 18, marginBottom: 7}}>Phone Number:</Text>
          <TextInput
            value={this.state.CadCost}
            placeholder="Enter"
            autoCapitalize="none"
            selectionColor="black"
            underlineColor="black"
            underlineColorAndroid="black"
            keyboardType="numeric"
            style={{
              fontSize: 20,
              width: '45%',
              height: '100%',
              marginTop: -2,
              borderColor: '#F5AE2F',
              borderWidth: 2,
              marginLeft: 5,
              borderRadius: 10,
              paddingHorizontal: 5,
            }}
            onChangeText={e => {
              this.setState({phone_number: e});
            }}></TextInput>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: '#00b806',
            borderColor: '#00b806',
            borderWidth: 3,
            borderRadius: 10,
            width: '20%',
            height: '5%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={async () => {
            if (this.state.label == undefined || this.state.label == '') {
              alert("Please fill in the client's name.");
            } else {
              await axios
                .post('http://localhost:3000/clients/add', {
                  label: this.state.label,
                  phone_number: this.state.phone_number,
                })
                .then(res => {
                  console.log(res.data);
                  this.props.navigation.navigate('Add Quote', {
                    _id: res.data._id,
                  });
                })
                .catch(err => {
                  console.error(err);
                });
            }
          }}>
          <Text style={{color: '#fff', fontSize: 15}}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: 7}}
          onPress={() => {
            this.props.navigation.navigate('Home');
          }}>
          <Text
            style={{
              fontSize: 18,
              color: '#007BFF',
              textDecorationLine: 'underline',
            }}>
            Back
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ClientAddScreen;
