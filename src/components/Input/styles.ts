import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  group: {
    width: '100%',
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingRight: 16
  },
  control: {
    flex: 1,
    height: 56,
    width: 56,
    paddingLeft: 16,
    fontSize: 16
  },
  icon: {
    height: 56,
    width: 56,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 3,
    borderRightColor: "#F4F5F6",
  }
});