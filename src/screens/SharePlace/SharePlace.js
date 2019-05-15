import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";


// We are not registering the component because it will be rendered in a screen
import PlaceInput from "../../components/PlaceInput/PlaceInput";

// We import from index where we will dispatch our action (in mapDispatchToProps)
import { addPlace } from "../../store/actions/index";

class SharePlaceScreen extends Component {
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

  placeAddedHandler = placeName => {
    // console.log('place added :' + placeName);
    this.props.onAddPlace(placeName);
  };

  render() {
    return (
      <View>
        {/* In order for onPlaceAdded, we need to connect it to redux store.
            placeAddedHandler in PlaceInput sends placeName that we pass on. */}
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
      </View>
    );
  }
}

// This will dispatch, via connect, inputs to redux
const mapDiaptchToProps = dispatch => {
  return {
    // onAddPlace will get placeName and call dispatch()
    // Then execute assPlace()
    onAddPlace: placeName => dispatch(addPlace(placeName))
  };
};

export default connect(
  null,
  mapDiaptchToProps
)(SharePlaceScreen);
