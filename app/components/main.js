import React, { Component } from 'react';
import Dimensions from 'Dimensions';


import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';


const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

console.log(windowHeight);
console.log(windowWidth);
var styles = StyleSheet.create({
    mainContainer: {
        padding: 15,
        flex: 1,
        marginTop: 65,
        backgroundColor: '#fff',
        justifyContent: 'flex-start'
    },
    title: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center',
        color: '#fff'
    },
    searchInput: {
        height: 50,
        padding: 4,
        marginRight: 5,
        fontSize: 23,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        color: 'white'
    },
    buttonText: {
        fontSize: 18,
        color: '#111',
        alignSelf: 'center'
    },
    button: {
        height: 45,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    flexRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      flex: 1
    },
    image: {
      margin: 5,
      flex: 1,
      width: (windowWidth-50)/2,
      height: (windowWidth-50)/2*0.7507,
      justifyContent: 'flex-start'
    }
});


const BackgroundImage = ({ source, style, children, ...props }) => {
  return (
      <Image
        source={source}
        style={[{flex: 1, width: null, height: null}, style]}
        {...props}
      >
        {children}
      </Image>
  );
}


class Main extends React.Component{
  constructor(...arg){
    super(...arg)
    this._handleClick = (item) => {
      this.setState({
        seleted: item
      })
    }
  }
  render() {
    return(
      <View style={styles.mainContainer}>
        <Text> Testing the Router </Text>
        <View style={styles.flexRow}>
        {
          [
            require('../images/10NmcChicken_s.png'),
            require('../images/comboNcone_s.png'),
            require('../images/10NmediumFries_s.png'),
          ].map((img)=>{
            return <TouchableHighlight
              style={styles.image}
              onPress={() => {this._handleClick('10Ncone')}}
              underlayColor="#ccc"
            >
              <Image
                source={img}
                style={styles.image}
                resizeMode='contain'
              />
            </TouchableHighlight>
          })
        }
        </View>
      </View>
    )
  }
};

// {
//   [
//     require('../images/10NmcChicken_s.png'),
//     require('../images/comboNcone_s.png'),
//     require('../images/10NmediumFries_s.png'),
//   ].map((img)=>{
//     return <TouchableHighlight
//       onPress={() => {this._handleClick('10Ncone')}}
//       underlayColor="#ccc"
//     >
//       <Image
//         source={img}
//         style={styles.image}
//         resizeMode='contain'
//       />
//     </TouchableHighlight>
//   })
// }

// <Image
//   source={require('../images/comboNcone_s.png')} style={styles.image}
//   resizeMode='cover'
// />

module.exports = Main;
