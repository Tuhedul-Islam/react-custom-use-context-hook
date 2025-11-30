import React, {createContext, useState} from "react";

const UserContext = createContext(null);

const UsersProvider = ({children}) => {

    const [users, setUsers] = useState([
        { id: 1, name: 'Alice'},
        { id: 2, name: 'Bob'},
        { id: 3, name: 'Charlie'}
    ]);

    return (
        <UserContext.Provider value={{users, setUsers}}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UsersProvider };