import axios from 'axios';
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

class QuoteAddScreen extends Component {
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
      ClientName: '',
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
          <Text style={{fontSize: 18}}>Client Name: $</Text>
          <TextInput
            value={this.state.CadCost}
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
              this.setState({ClientName: e});
            }}></TextInput>
        </View>

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
            await axios
              .post('http://localhost:3000/quotes/add', {
                CADCost: this.state.CadCost,
                MetalCost: this.state.MetalCost,
                WaxPrintCost: this.state.WaxPrintCost,
                WaxLCost: this.state.WaxLaborCost,
                DiamondCost: this.state.DiamondCost,
                SettingCost: this.state.SettingCost,
                CSettingCost: this.state.CenterSettingCost,
                JewelryCost: this.state.JewelryCost,
                PolishCost: this.state.PolishCost,
                TotalCost:
                  TotalCost * ((this.state.MarkupPercent + 100) * 0.01),
                clientId: this.props.route.params._id,
                label: this.state.ClientName,
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
      </View>
    );
  }
}

export default QuoteAddScreen;
