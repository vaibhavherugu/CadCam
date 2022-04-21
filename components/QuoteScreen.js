import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  BackHandler,
  Button,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

class QuoteScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CADCost: '',
      CSettingCost: '',
      DiamondCost: '',
      JewelryCost: '',
      MetalCost: '',
      PolishCost: '',
      SettingCost: '',
      TotalCost: '',
      WaxLCost: '',
      WaxPrintCost: '',
      Id: '',
    };
  }

  async componentDidMount() {
    await axios
      .get(`http://localhost:3000/quotes/findId/` + this.props.route.params._id)
      .then(res => {
        console.log(res.data[0]);
        const data = res.data[0];
        this.setState({
          CADCost: data.CADCost,
          CSettingCost: data.CSettingCost,
          DiamondCost: data.DiamondCost,
          JewelryCost: data.JewelryCost,
          MetalCost: data.MetalCost,
          PolishCost: data.PolishCost,
          SettingCost: data.SettingCost,
          TotalCost: data.TotalCost,
          WaxLCost: data.WaxLCost,
          WaxPrintCost: data.WaxPrintCost,
          Id: data._id,
        });
      })
      .catch(err => {
        console.error(err);
      });
  }
  createTwoButtonAlert = () =>
    Alert.alert('Are you sure?', '', [
      {
        text: 'Cancel',
        onPress: () => console.log('filler'),
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: async () => {
          await axios
            .delete(
              `http://localhost:3000/clients/delete/` +
                this.props.route.params._id,
            )
            .then(res => {
              console.log(this.props.route.params._id, 'success');
              this.props.navigation.navigate('Home');
            })
            .catch(err => {
              console.error(err);
            });
          await axios
            .delete(`http://localhost:3000/quotes/delete/` + this.state.Id)
            .then(res => {
              console.log(this.state.Id, 'success');
              this.props.navigation.navigate('Home');
            })
            .catch(err => {
              console.error(err);
            });
        },
      },
    ]);

  render() {
    return (
      <View style={{width: '100%', height: '100%', backgroundColor: '#fff'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginBottom: 7,
            marginTop: 20,
            marginRight: 20,
          }}>
          <Icon
            name="trash-2"
            color={'#000'}
            size={25}
            style={{paddingRight: 5}}
            onPress={this.createTwoButtonAlert}
          />
          <Icon
            name="edit"
            color={'#000'}
            size={25}
            onPress={async () => {
              await AsyncStorage.setItem('Id', this.state.Id);
              this.props.navigation.navigate('Edit Quote');
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            marginBottom: 75,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginBottom: 7,
            }}>
            <Text style={{fontSize: 18, marginBottom: 7}}>CAD Cost: </Text>
            <Text style={{fontSize: 18, marginBottom: 7}}>
              ${this.state.CADCost}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginBottom: 7,
            }}>
            <Text style={{fontSize: 18, marginBottom: 7}}>Metal Cost: </Text>
            <Text style={{fontSize: 18, marginBottom: 7}}>
              ${this.state.MetalCost}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginBottom: 7,
            }}>
            <Text style={{fontSize: 18, marginBottom: 7}}>
              Wax Print Cost:{' '}
            </Text>
            <Text style={{fontSize: 18, marginBottom: 7}}>
              ${this.state.WaxPrintCost}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginBottom: 7,
            }}>
            <Text style={{fontSize: 18, marginBottom: 7}}>
              Wax Labor Cost:{' '}
            </Text>
            <Text style={{fontSize: 18, marginBottom: 7}}>
              ${this.state.WaxLCost}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginBottom: 7,
            }}>
            <Text style={{fontSize: 18, marginBottom: 7}}>Diamond Cost: </Text>
            <Text style={{fontSize: 18, marginBottom: 7}}>
              ${this.state.DiamondCost}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginBottom: 7,
            }}>
            <Text style={{fontSize: 18, marginBottom: 7}}>Setting Cost: </Text>
            <Text style={{fontSize: 18, marginBottom: 7}}>
              ${this.state.SettingCost}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginBottom: 7,
            }}>
            <Text style={{fontSize: 18, marginBottom: 7}}>
              Center Settiing Cost:{' '}
            </Text>
            <Text style={{fontSize: 18, marginBottom: 7}}>
              ${this.state.CSettingCost}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginBottom: 7,
            }}>
            <Text style={{fontSize: 18, marginBottom: 7}}>Jewelry Cost: </Text>
            <Text style={{fontSize: 18, marginBottom: 7}}>
              ${this.state.JewelryCost}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginBottom: 7,
            }}>
            <Text style={{fontSize: 18, marginBottom: 7}}>Polish Cost: </Text>
            <Text style={{fontSize: 18, marginBottom: 7}}>
              ${this.state.PolishCost}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginBottom: 7,
            }}>
            <Text style={{fontSize: 18, color: '#00b806', marginBottom: 7}}>
              Sales Price:
            </Text>
            <Text style={{fontSize: 18, color: '#00b806', marginBottom: 7}}>
              ${this.state.TotalCost}
            </Text>
          </View>
          <TouchableOpacity
            onPress={async () => {
              await AsyncStorage.setItem('Id', this.state.Id);
              this.props.navigation.navigate('Edit Quote');
            }}></TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default QuoteScreen;
