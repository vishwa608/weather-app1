import React, { Component } from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default class WeatherScreen extends Component {
  constructor() {
    super ();
    this.state  = {
      weather:'',
    };
  }

  getWeather = async () => {
    //change latitude and longitude
    var url= 'https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139';
    return fetch (url)
      .then(response=>response.jason())
      .then(responseJason=>{
        this.setState({
          weather:responseJason,
        });
      })
      .catch (error=> {
        console.error(error);
      });
  };
  componetDidMount =()=> {
    this.getWeather();
  };
  render() {
    if(this.state.weather===''){
      return(
        <View style={styles.containers}>
        <Text>Loading...</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.containers}>
          <View style={styles.subContainers}>
            <Text style={styles.title}>
              Weather Forcast
            </Text>
            <Image
              style={styles.cloudImage}
              source={('./clouds.png')}
            />
            <View style={styles.textContainers}>
            <Text style={{fontSize:18}}>
              {this.state.weather.main.temp}&deg;C
            </Text>
            <Text style={{ fontSize: 20, margin:10}}>
            humidity: {this.state.weather.main.humidity}
            </Text>
            <Text style={{fontSize: 20}}>
              {this.state.weather.weather[0].description}
            </Text>
            </View>
            </View>
          </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  container: {
   flex:1
  },
  subContainer : { 
    flex: 1, 
    borderWidth: 1, 
    alignItems: 'center' 
    },
    title:{ 
      marginTop: 50, 
      fontSize: 30,
      fontWeight: '550' 
    },
    cloudImage :{ 
      width: 200, 
      height: 200, 
      marginTop: 30 
    },
    textContainer : { 
      flex: 1,
      alignItems: 'center', 
      flexDirection:'row', 
      marginTop:-150
    }
});