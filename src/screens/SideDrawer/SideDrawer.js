import React, { Component } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
// Dimensions is needed for Android to work
// Dimensions.get("window").width * 0.8 indicates to open 80% of the screen

class SideDrawer extends Component {
  render() {
    return (
      <View style={[styles.container, {width: Dimensions.get("window").width * 0.8 }]}>
        <Text>Side Drawer</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 22,
    backgroundColor: "white",
    flex: 1
  }
})

export default SideDrawer;
