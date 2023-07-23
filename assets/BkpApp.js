import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, StyleSheet, StatusBar} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Slider from './assets/Slider';
import MyTabs from './assets/BottomTabNav';

type Item = (typeof dataSlide)[0];
const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  image: {
    width: 250,
    height: 250,
    marginVertical: 32,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    paddingVertical: 20,
    fontSize: 20,
  },
  title: {
    fontSize: 34,
    color: 'white',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'rgba(255, 0, 0, 1)',
    color: '#FFF',
  },
  flex1: {
    flex: 4,
    justifyContent: 'flex-end',
  },
  flex2: {
    flex: 2,
  },
});

class App extends React.Component {
state = {
    showRealApp: false,
  };

  _renderItem = ({item}: {item: Item}) => {
    return (
      <View
        style={[
          styles.slide,
          {
            backgroundColor: item.bg,
          },
        ]}>
        <View style={styles.flex1}>
          <Image style={styles.image} source={item.image} />
        </View>

        <View style={styles.flex2}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };

  _keyExtractor = (item: Item) => item.title;

  _renderPrevButton = () => {
    return (
      <View style={styles.button}>
        <Text style={styles.button}>Prev</Text>
      </View>
    );
  };

  _renderNextButton = () => {
    return (
      <View style={styles.button}>
        <Text style={styles.button}>Next</Text>
      </View>
    );
  };

  _renderDoneButton = () => {
    return (
      <View style={styles.button}>
        <Text style={styles.button}>Done</Text>
      </View>
    );
  };

  _onDone = () => {
    this.setState({showRealApp: true});
  };

  render() {
    if (this.state.showRealApp) {
      return (
        <NavigationContainer>
        <MyTabs />
        </NavigationContainer>
      );
    } else {
      return (
        <View style={{flex: 1}}>
          <StatusBar translucent backgroundColor="transparent" />
          <AppIntroSlider
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            showPrevButton
            onDone={this._onDone}
            data={Slider}
          />
        </View>
      );
    }
  }
}

export default App;