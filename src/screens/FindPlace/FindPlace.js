import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
// We need 'connect' to get places from the rdux store

// This is where we render all the places.
import PlaceList from "../../components/PlaceList/PlaceList";

class FindPlaceScreen extends Component {

   // In order to open a drawer from this screen, we have to listen to an event
  // We start with a constructor
  constructor(props) {
    super(props);

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    // console.log(event);
    if (event.type === "NavBarButtonPress") {
      if (event.id === "sideDrawerToggle"){
        this.props.navigator.toggleDrawer({
          side: "left"
        })
      }
    }
  }
  
  itemSelectedHandler = key => {
    // react native navigation provides a prop function navigator
    // that has all the push, pop and other utilities
    // places has all the places. Now, we find the place with the input key
    // passProps, provided by push, will act like regular props

    const selPlace = this.props.places.find(place => {
      return place.key === key;
    });

    this.props.navigator.push({
      screen: "rnbaanda8.PlaceDetailScreen",
      title: selPlace.name,
      passProps: {
        selectedPlace: selPlace
      }
    });
  };

  render() {
    return (
      <View>
        {/* Props to sent to PlaceList is places */}
        <PlaceList
          places={this.props.places}
          onItemSelected={this.itemSelectedHandler}
        />
      </View>
    );
  }
}

// First places of state.places.places reach out to configureStore.js rootReducer
// Then, inside the places reducer, we share the places[] from the initial state
const mapStateToProps = state => {
  return {
    places: state.places.places
  };
};

export default connect(mapStateToProps)(FindPlaceScreen);
