import React, {useContext} from 'react'
import { UserContext } from '../context/UserContext'

const User = ({user}) => {

  const {users, setUsers} = useContext(UserContext);

    const hanleDeleteUser = (userId) => {
    console.log(userId)
    const remainingUsers = users.filter(user => user.id !== userId);
    setUsers(remainingUsers);
  }

  return (
    <>
      {user.id} - 
      {user.name}
      <button onClick={()=>hanleDeleteUser(user.id)}>Delete</button>
    </>
  )
}

export default User