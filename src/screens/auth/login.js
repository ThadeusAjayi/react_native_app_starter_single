import React, { Component } from "react";
import { SafeAreaView, View, Text } from "react-native";
import { StylesDark } from "../../themes/index";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";

export default class login extends Component {
  render() {
    return (
      <SafeAreaView style={{ ...StylesDark.parent }}>
        <KeyboardAwareScrollView>
          <View style={{ ...StylesDark.container }}>
            <Text>Yess</Text>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}
