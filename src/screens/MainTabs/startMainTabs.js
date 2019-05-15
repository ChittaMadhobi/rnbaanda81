import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Ionicons";

// We will setup tabs to roam around. So, create new screens first
// We do not need to import screens for it is registerd in App.js

// For android, icon is mandatory. We use an helper function as below
// The Icon.getImageSource returns a promise. Hence, we cannot use
// it directly in the js object. Instead, we execute the promise first.
// When done ... we execute the next step (as below). Luckily,
// react native frmework provides Promise.all() method that executes
// everything in it and then proceed if successful.

const startTabs = () => {
  Promise.all([
    Icon.getImageSource("md-map", 30),
    Icon.getImageSource("ios-share-alt", 30),
    Icon.getImageSource("ios-menu", 30)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: "rnbaanda8.FindPlaceScreen",
          label: "Find Place (tab)",
          title: "Find Place (NB)",
          icon: sources[0],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[2],
                title: "Menu",
                id: "sideDrawerToggle"
              }
            ]
          }
        },
        {
          screen: "rnbaanda8.SharePlaceScreen",
          label: "Share Place (tab)",
          title: "Share Place (NB)",
          icon: sources[1],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[2],
                title: "Menu",
                id: "sideDrawerToggle"
              }
            ]
          }
        }
      ],
      drawer: {
        left: {
          screen: "rnbaanda8.SideDrawer"
        }
      }
    });
  });
};

export default startTabs;
