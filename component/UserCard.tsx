import React, { FunctionComponent } from "react";
import { Image, Text, View } from "react-native";
import { styles } from "../css/styles";
import { Result } from "../type/types";

interface UserCardProps {
    user:Result,
    key:string,
}
 
const UserCard: FunctionComponent<UserCardProps> = ({user}) => {
    return (
        <View style={styles.userItem}>
            <View>
                <Image
                    style={styles.userImage}
                    source={{uri:user.picture.medium}}
                />
            </View>
            <View style={styles.userInfo}>
                <Text>{user.name.last} {user.name.first}</Text>
                <Text>{user.gender}</Text>
                <Text>{user.email}</Text>
            </View>
        </View>
      );
}
 
export default UserCard;