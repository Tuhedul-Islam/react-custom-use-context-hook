import User from './User'
import { useUserContext } from '../hook/useUserContext';

const Users = () => {

    
    const {users, setUsers} = useUserContext();
    //console.log(users)

  return (
    <div>
        {
            users.map((user) => (
                <p key={user.id}>
                    <User user={user}/>
                </p>
            ))
        }
    </div>
  )
}

export default Users