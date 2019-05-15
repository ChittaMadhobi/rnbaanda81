// There are two things we will do here
//
//  1. Register Screen(s)
//     You have to register a component befoew you can use it via Navigation.
//     A component can be loaded only from screens that are registered.
//  2. Start the application

import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";

import AuthScreen from "./src/screens/Auth/Auth";
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";
import FindPlaceScreen from "./src/screens/FindPlace/FindPlace";
import PlaceDetailScreen from './src/screens/PlaceDetail/PlaceDetail';
import SideDrawer from './src/screens/SideDrawer/SideDrawer';

import configureStore from "./src/store/configureStore";


// We execute the function confiureStore. It returns the value of store.
const store = configureStore();

// Register Screens AND add store & Provider to all screens that would need redux store.
Navigation.registerComponent(
  "rnbaanda8.AuthScreen",
  () => AuthScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "rnbaanda8.SharePlaceScreen",
  () => SharePlaceScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "rnbaanda8.FindPlaceScreen",
  () => FindPlaceScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "rnbaanda8.PlaceDetailScreen",
  () => PlaceDetailScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "rnbaanda8.SideDrawer",
  () => SideDrawer
);
// Start an App  (for react native navigation)
Navigation.startSingleScreenApp({
  screen: {
    screen: "rnbaanda8.AuthScreen",
    title: "Login"
  }
});
