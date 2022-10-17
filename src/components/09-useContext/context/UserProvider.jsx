import { useState } from "react";
import { UserContext } from "./UserContext"

// const user  = {
//     id: 123,
//     name: 'Iris',
//     email: 'morirdefrio@gmail.com'
// }

export const UserProvider = ({children}) => {

    const [user, setUser] = useState();

  return (
    // <UserContext.Provider value={{ hola: 'Mundo', user: user }}>
    //     {children}
    // </UserContext.Provider>

    <UserContext.Provider value={{ user, setUser }}>
        {children}
    </UserContext.Provider>
  )
}
