import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
class AnyColorButton extends Component{
 displayAlert=()=>{
    alert('I am an alert box');
  }
  render(){
    return(
 <Button title="Click me" color={this.props.color} onPress={this.displayAlert} />
    )
  }
}
export default class App extends Component {
 
  render() {
    return (
      <View style={{ marginTop: 200 }}>
       <AnyColorButton color="purple"/>
        <Text>My First React component</Text>
      </View>
    );
  }
}
