import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator
} from "react-navigation";

import * as AUTH_SCREENS from "../screens/auth/index";

const AppNavigation = createBottomTabNavigator({});

const AuthNavigation = createStackNavigator({
  auth_login: {
    screen: AUTH_SCREENS.Login,
    navigationOptions: {
      header: null
    }
  },
  auth_forgotpassword: {
    screen: AUTH_SCREENS.Forgotpassword,
    navigationOptions: {
      header: null
    }
  }
});

const BaseNavigation = createSwitchNavigator(
  {
    AuthNavigation: {
      screen: AuthNavigation,
      navigationOptions: {
        header: null
      }
    },
    AppNavigation: {
      screen: AppNavigation,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "AuthNavigation"
  }
);

export default createAppContainer(BaseNavigation);
