import React, {useState, useEffect, Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Dropdown, MultiSelect} from 'react-native-element-dropdown';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Feather';

class QuoteSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
  }
  async componentDidMount() {
    await axios
      .get(`http://localhost:3000/quotes/find/` + this.props.route.params._id)
      .then(res => {
        this.setState({data: res.data});
        console.log(this.state.data);
      })
      .catch(err => {
        console.error(err);
      });
  }
  render() {
    const navigation = this.props.navigation;
    let dropdown = [];

    const _renderItem = item => {
      return (
        <View style={styles.item}>
          <Text style={styles.textItem}>{item.label}</Text>
        </View>
      );
    };

    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginBottom: 7,
          }}></View>
        <Text style={{fontSize: 16}}>Quote: </Text>
        <Dropdown
          style={styles.dropdown}
          data={this.state.data}
          search
          searchPlaceholder="Search"
          labelField="label"
          valueField="value"
          placeholder="Select Quote"
          value={dropdown}
          onChange={item => {
            navigation.navigate('Quote', {_id: item._id});
          }}
          renderItem={item => _renderItem(item)}
        />
      </View>
    );
  }
}

export default QuoteSelect;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 40,
    textAlign: 'center',
  },
  dropdown: {
    backgroundColor: 'white',
    borderColor: '#1f65ff',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    marginTop: 20,
  },
  item: {
    paddingVertical: 17,
    paddingHorizontal: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 15,
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
});
