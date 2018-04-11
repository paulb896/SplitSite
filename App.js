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
const website = 'https://www.giantbomb.com';
const movieTestUrl = 'https://raw.githubusercontent.com/itemsapi/itemsapi-example-data/master/items/movies-for-test.json';
const baseUrl = 'http://www.ea.com'; // TODO: CHANGE TO TEMPLATE SERVER
throw error("CHANGE BASE URL")


type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      site: 'http://www.ea.com',
      navUrl: `${baseUrl}nav`,
      gameListUrl: `${baseUrl}game-list`,
      gameDetailsUrl: `${baseUrl}game-details`,
      friendListUrl: `${baseUrl}friend-list`,
      chatUrl: `${baseUrl}chat`
    }
  }
  componentDidMount(){
    return fetch(movieTestUrl)
      // .then((response) => response.json())
      .then((htmlData) => {
        // this.setState({
        //   isLoading: false,
        //   dataSource: responseJson,
        // }, function(){
        //
        // });
      })
      .catch((error) =>{
        console.error(error);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.nav}>
          <WebView
            bounces={false}
            scrollEnabled={false}
            style={{height: 120, width: Dimensions.get('window').width, marginTop: 20}}
            source={{uri: this.state.navUrl}}
          />
        </View>
        <WebView
          bounces={false}
          style={{height: 550, width: Dimensions.get('window').width}}
          source={{uri: this.state.gameListUrl}}
        />
        <WebView
          bounces={false}
          scrollEnabled={false}
          style={{height: 150, width: Dimensions.get('window').width}}
          source={{uri: this.state.gameDetailsUrl}}
        />
        <WebView
          bounces={false}
          style={{ width: Dimensions.get('window').width}}
          source={{uri: this.state.friendListUrl}}
        />
        <WebView
          bounces={false}
          scrollEnabled={false}
          style={{width: Dimensions.get('window').width}}
          source={{uri: this.state.chatUrl}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  web: {
    width: Dimensions.get('window').width
  },
  nav: {
    width: Dimensions.get('window').width,
    height: 50,
    marginTop: 20
  },
  gameList: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 30
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
