import React from 'react'

//todo:context: this is mean if parent component has context username as data
// todo: then all nested component inside the same provider can able to consume
//todo: all data provide the context 

const UserContext = React.createContext()

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer,UserContext }

export default UserContext