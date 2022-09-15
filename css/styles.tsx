import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  userList: {
    paddingTop: 50,
    paddingBottom: 50,
  },
  userItem: {
    flexDirection: "row",
    backgroundColor: "lightgreen",
    padding: 10,
    margin: 10,
  },
  userImage: {
    width: 150,
    height: 200,
  },
  userInfo: {
    justifyContent: "center",
    padding: 10,
  },
});
