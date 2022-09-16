import { StyleSheet, TouchableWithoutFeedback, useWindowDimensions } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    paddingTop:100,
    paddingBottom:10,
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
  input:{
    height: 30,
    width:100,
    margin: 5,
    paddingLeft:5,
    paddingRight:5,
    backgroundColor:"#fff",
  },
  button:{
    height: 30,
    width:80,
    textAlign:"center",
    marginLeft:10,
    backgroundColor:"#20b2aa",
  },
  topBar:{
    alignItems:"center",
    flexDirection:"row",
  }
});
