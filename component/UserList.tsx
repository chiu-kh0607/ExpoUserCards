import React, { FunctionComponent } from 'react'
import { ScrollView, View } from 'react-native'
import { styles } from '../css/styles'
import { Result } from '../type/types'
import UserCard from './UserCard'
interface UserListProp{
    users:Result[],
}
const UserList: FunctionComponent<UserListProp>=({users})=>{
  return (
    <ScrollView style={styles.userList}>
        {users.map(
            (user)=>
                <UserCard key={user.id.value} user={user}/>
        )}
    </ScrollView>
  )
}

export default UserList