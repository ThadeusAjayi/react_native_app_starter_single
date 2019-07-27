import React from "react";
import { StatusBar, Platform } from "react-native";

export default (theme, color) => {
  if (Platform.OS == "android") {
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor(color || "transparent");
  }
  StatusBar.setBarStyle(`${theme || "dark"}-content`);
  return StatusBar;
};
