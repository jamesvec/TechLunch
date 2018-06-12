import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics } from "../../Themes/";

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  map: {
    flex: 1,
    height: Metrics.screenHeight,
    padding: 0,
    width: Metrics.screenWeight
  }
});
