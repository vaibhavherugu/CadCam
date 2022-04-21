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
import AsyncStorage from '@react-native-async-storage/async-storage';
class QuoteEditScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CadCost: '',
      MetalCost: '',
      WaxPrintCost: '',
      WaxLaborCost: '',
      DiamondCost: '',
      SettingCost: '',
      CenterSettingCost: '',
      JewelryCost: '',
      PolishCost: '',
      TotalCost: '',
      MarkupPercent: '',
      SalesPrice: '',
    };
  }
  render() {
    const TotalCost =
      this.state.CadCost +
      this.state.MetalCost +
      this.state.WaxPrintCost +
      this.state.WaxLaborCost +
      this.state.DiamondCost +
      this.state.SettingCost +
      this.state.CenterSettingCost +
      this.state.JewelryCost +
      this.state.PolishCost;
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
          <Text style={{fontSize: 18}}>CAD Cost: $</Text>
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
              width: '19%',
              height: '100%',
              marginTop: -2,
              borderColor: '#F5AE2F',
              borderWidth: 2,
              marginLeft: 5,
              borderRadius: 10,
              paddingHorizontal: 5,
            }}
            onChangeText={e => {
              this.setState({CadCost: parseInt(e, 10)});
            }}></TextInput>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginBottom: 7,
          }}>
          <Text style={{fontSize: 18}}>Metal Cost: $</Text>
          <TextInput
            value={this.state.MetalCost}
            placeholder="Enter"
            autoCapitalize="none"
            selectionColor="black"
            underlineColor="black"
            underlineColorAndroid="black"
            keyboardType="numeric"
            style={{
              fontSize: 20,
              width: '19%',
              height: '100%',
              marginTop: -2,
              borderColor: '#F5AE2F',
              borderWidth: 2,
              marginLeft: 5,
              borderRadius: 10,
              paddingHorizontal: 5,
            }}
            onChangeText={e => {
              this.setState({MetalCost: parseInt(e, 10)});
            }}></TextInput>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginBottom: 7,
          }}>
          <Text style={{fontSize: 18}}>Wax Print Cost: $</Text>
          <TextInput
            value={this.state.WaxPrintCost}
            placeholder="Enter"
            autoCapitalize="none"
            selectionColor="black"
            underlineColor="black"
            underlineColorAndroid="black"
            style={{
              fontSize: 20,
              width: '19%',
              height: '100%',
              marginTop: -2,
              borderColor: '#F5AE2F',
              borderWidth: 2,
              marginLeft: 5,
              borderRadius: 10,
              paddingHorizontal: 5,
            }}
            onChangeText={e => {
              this.setState({
                WaxPrintCost: parseInt(e, 10),
              });
            }}></TextInput>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginBottom: 7,
          }}>
          <Text style={{fontSize: 18}}>Wax Labor Cost: $</Text>
          <TextInput
            value={this.state.WaxLaborCost}
            placeholder="Enter"
            autoCapitalize="none"
            selectionColor="black"
            underlineColor="black"
            underlineColorAndroid="black"
            style={{
              fontSize: 20,
              width: '19%',
              height: '100%',
              marginTop: -2,
              borderColor: '#F5AE2F',
              borderWidth: 2,
              marginLeft: 5,
              borderRadius: 10,
              paddingHorizontal: 5,
            }}
            onChangeText={e => {
              this.setState({
                WaxLaborCost: parseInt(e, 10),
              });
            }}></TextInput>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginBottom: 7,
          }}>
          <Text style={{fontSize: 18}}>Diamond Cost: $</Text>
          <TextInput
            value={this.state.DiamondCost}
            placeholder="Enter"
            autoCapitalize="none"
            selectionColor="black"
            underlineColor="black"
            underlineColorAndroid="black"
            style={{
              fontSize: 20,
              width: '19%',
              height: '100%',
              marginTop: -2,
              borderColor: '#F5AE2F',
              borderWidth: 2,
              marginLeft: 5,
              borderRadius: 10,
              paddingHorizontal: 5,
            }}
            onChangeText={e => {
              this.setState({
                DiamondCost: parseInt(e, 10),
              });
            }}></TextInput>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginBottom: 7,
          }}>
          <Text style={{fontSize: 18}}>Setting Cost: $</Text>
          <TextInput
            value={this.state.SettingCost}
            placeholder="Enter"
            autoCapitalize="none"
            selectionColor="black"
            underlineColor="black"
            underlineColorAndroid="black"
            style={{
              fontSize: 20,
              width: '19%',
              height: '100%',
              marginTop: -2,
              borderColor: '#F5AE2F',
              borderWidth: 2,
              marginLeft: 5,
              borderRadius: 10,
              paddingHorizontal: 5,
            }}
            onChangeText={e => {
              this.setState({
                SettingCost: parseInt(e, 10),
              });
            }}></TextInput>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginBottom: 7,
          }}>
          <Text style={{fontSize: 18}}>Center Setting Cost: $</Text>
          <TextInput
            value={this.state.CenterSettingCost}
            placeholder="Enter"
            autoCapitalize="none"
            selectionColor="black"
            underlineColor="black"
            underlineColorAndroid="black"
            style={{
              fontSize: 20,
              width: '19%',
              height: '100%',
              marginTop: -2,
              borderColor: '#F5AE2F',
              borderWidth: 2,
              marginLeft: 5,
              borderRadius: 10,
              paddingHorizontal: 5,
            }}
            onChangeText={e => {
              this.setState({
                CenterSettingCost: parseInt(e, 10),
              });
            }}></TextInput>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginBottom: 7,
          }}>
          <Text style={{fontSize: 18}}>Jewelry Cost: $</Text>
          <TextInput
            value={this.state.JewelryCost}
            placeholder="Enter"
            autoCapitalize="none"
            selectionColor="black"
            underlineColor="black"
            underlineColorAndroid="black"
            style={{
              fontSize: 20,
              width: '19%',
              height: '100%',
              marginTop: -2,
              borderColor: '#F5AE2F',
              borderWidth: 2,
              marginLeft: 5,
              borderRadius: 10,
              paddingHorizontal: 5,
            }}
            onChangeText={e => {
              this.setState({
                JewelryCost: parseInt(e, 10),
              });
            }}></TextInput>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginBottom: 7,
          }}>
          <Text style={{fontSize: 18}}>Polish Cost: $</Text>
          <TextInput
            value={this.state.PolishCost}
            placeholder="Enter"
            autoCapitalize="none"
            selectionColor="black"
            underlineColor="black"
            underlineColorAndroid="black"
            style={{
              fontSize: 20,
              width: '19%',
              height: '100%',
              marginTop: -2,
              borderColor: '#F5AE2F',
              borderWidth: 2,
              marginLeft: 5,
              borderRadius: 10,
              paddingHorizontal: 5,
            }}
            onChangeText={e => {
              this.setState({
                PolishCost: parseInt(e, 10),
              });
            }}></TextInput>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginBottom: 7,
          }}>
          <Text style={{fontSize: 18}}>Markup Percent: </Text>
          <TextInput
            value={this.state.MarkupPercent}
            placeholder="Enter"
            autoCapitalize="none"
            selectionColor="black"
            underlineColor="black"
            underlineColorAndroid="black"
            keyboardType="numeric"
            style={{
              fontSize: 20,
              width: '19%',
              height: '100%',
              marginTop: -2,
              borderColor: '#F5AE2F',
              borderWidth: 2,
              marginLeft: 5,
              marginRight: 3,
              borderRadius: 10,
              paddingHorizontal: 5,
            }}
            onChangeText={e => {
              this.setState({
                MarkupPercent: parseInt(e, 10),
              });
            }}></TextInput>
          <Text style={{fontSize: 18}}>%</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginBottom: 7,
          }}>
          <Text style={{fontSize: 18, color: '#00b806'}}>
            Sales Price: $
            {TotalCost * ((this.state.MarkupPercent + 100) * 0.01)}
          </Text>
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
            const ID = await AsyncStorage.getItem('Id');
            console.log(ID);
            await axios
              .patch(`http://localhost:3000/quotes/edit/` + ID, {
                CADCost: parseInt(this.state.CadCost, 10),
                MetalCost: parseInt(this.state.MetalCost, 10),
                WaxPrintCost: parseInt(this.state.WaxPrintCost, 10),
                WaxLCost: parseInt(this.state.WaxLaborCost, 10),
                DiamondCost: parseInt(this.state.DiamondCost, 10),
                SettingCost: parseInt(this.state.SettingCost, 10),
                CSettingCost: parseInt(this.state.CenterSettingCost, 10),
                JewelryCost: parseInt(this.state.JewelryCost, 10),
                PolishCost: parseInt(this.state.PolishCost, 10),
                TotalCost:
                  TotalCost * ((this.state.MarkupPercent + 100) * 0.01),
              })
              .then(res => {
                console.log(res);
                this.props.navigation.navigate('Home');
              })
              .catch(err => {
                console.error(err);
              });
          }}>
          <Text style={{color: '#fff', fontSize: 15}}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: 7}}
          onPress={() => {
            this.props.navigation.navigate('Quote');
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

export default QuoteEditScreen;
