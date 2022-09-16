import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";
import { useEffect, useState } from "react";
import React from "react";
import { Result } from "./type/types";
import UserList from "./component/UserList";
import { getUser } from "./api/getUser";
import { styles } from "./css/styles";

export default function App() {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const [result, setResult] = useState<Result[]>([]);
  const [count, setCount] = useState<number>(5);
  const { fetchUsers } = getUser();
  useEffect(() => {
    fetchUsers(result, setResult, count);
  }, []);
  //fetch user when no record found
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          value={count.toString()}
          onChangeText={(value: string) => {
            if (!isNaN(Number(value.toString()))) {
              setCount(Number(value));
              fetchUsers(result, setResult, Number(value.toString()));
            }
          }}
        />
        <Text
          style={styles.button}
          onPress={() => {
            fetchUsers(result, setResult, count);
          }}
        >
          Refresh
        </Text>
      </View>
      <View>
        <UserList users={result} />
        <StatusBar style="auto" />
      </View>
    </View>
  );
}
