import React, { FunctionComponent } from "react";
import { FlatList, ListRenderItem, ScrollView, View } from "react-native";
import { styles } from "../css/styles";
import { Result } from "../type/types";
import UserCard from "./UserCard";
interface UserListProp {
  users: Result[];
}
const UserList: FunctionComponent<UserListProp> = ({ users }) => {
  // const renderItem = ({ user }) => <UserCard user={user} />;
  const renderItem: ListRenderItem<Result> = ({ item }) => (
    <UserCard user={item} />
  );
  return (
    <FlatList
      data={users}
      renderItem={renderItem}
      keyExtractor={(item: Result, index: number) => item.cell}
    />
    // <ScrollView style={styles.userList}>
    //   {users.map((user) => (
    //     <UserCard key={user.cell} user={user} />
    //   ))}
    // </ScrollView>
  );
};

export default UserList;
