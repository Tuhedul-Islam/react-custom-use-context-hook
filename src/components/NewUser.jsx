import React, {useState} from 'react'
import { useUserContext } from '../hook/useUserContext';

const NewUser = () => {

    const [username, setUsername] = useState('');
    const {users, setUsers} = useUserContext();

    const handleChange = (e) => {
        setUsername(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('New User Added:', username);

        const newUser = {id: Date.now(), name: username};
        setUsers([...users, newUser]);
        setUsername('');
    }

  return (
    <div>
        <u><h3>User Registration</h3></u>
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} name='user' onChange={handleChange} placeholder='Enter user name' />
            <button type='submit'>Add User</button>
        </form>
    </div>
  )
}

export default NewUser