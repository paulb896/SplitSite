/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  FlatList,
  ActivityIndicator,
  Platform,
  StyleSheet,
  Text,
  Bold,
  View,
  ScrollView,
  Dimensions,
  WebView,
  TextInput
} from 'react-native';
import HTML from 'react-native-render-html';
console.ignoredYellowBox = ['Remote debugger'];
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

let htmlContent = `
    <style>
        .some-text {
          color:red;
        }
    </style>
    <h1 style="text-align:center">Star Wars Battlefront 2</h1>
    <h2 style="text-align:center">News and Media</h2>
    <button type="button">HELLO</button>
    <img src="https://media.contentapi.ea.com/content/dam/ea/walrus/maps/kamino-vista-xlg-2x.jpg"/>
`;
const website = 'http://www.gif-shop.com'
const movieTestUrl = 'https://raw.githubusercontent.com/itemsapi/itemsapi-example-data/master/items/movies-for-test.json';

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state ={ isLoading: true, site: 'https://www.ea.com', site2: 'http://www.reddit.com' }
  }
  componentDidMount(){
    return fetch(movieTestUrl)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={styles.web}>
            <Text style={styles.siteTitle}>Site 1</Text>
            <TextInput
              style={styles.siteInput}
              onChangeText={(site) => this.setState({site})}
              value={this.state.site}
            />
            <WebView
              source={{uri: this.state.site}}
            />
          </View>
          <View style={styles.web}>
            <Text style={styles.siteTitle}>Site 2</Text>
            <TextInput
              style={styles.siteInput}
              onChangeText={(site2) => this.setState({site2})}
              value={this.state.site2}
            />
            <WebView
              source={{uri: this.state.site2}}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  web: {
    width: Dimensions.get('window').width/2
  },
  siteTitle: {
    height: 15,
    marginBottom: 2,
    textAlign: 'center'
  },
  siteInput: {
    paddingLeft: 5,
    height: 40,
    borderColor: 'gray',
    borderWidth: 2,
    width: Dimensions.get('window').width/2
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  year: {
    fontWeight:'bold',
    color:'red'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
