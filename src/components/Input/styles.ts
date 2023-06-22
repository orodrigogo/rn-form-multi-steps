import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  group: {
    width: '100%',
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingRight: 16,
    overflow: "hidden"
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
  },
  errorText: {
    fontSize: 12,
    marginTop: 7,
    color: "#DC1637"
  },
  isError: {
    borderWidth: 1,
    borderColor: "#DC1637"
  }
});