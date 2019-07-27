import React from "react";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import colors from "./colors";

export const StylesLight = StyleSheet.create({
  parent: {
    flex: 1
  },
  container: {
    flex: 1,
    paddingHorizontal: RFValue(16)
  }
});

export const StylesDark = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: colors.black20
  },
  container: {
    flex: 1,
    paddingHorizontal: RFValue(16)
  }
});
