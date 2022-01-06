import {createContext, useState } from 'react'

const ListIdContext = createContext();

function ListIdProvider({children}){
    const [listId, setListId] = useState(null)
    return <ListIdContext.Provider value={{listId, setListId}}>{children}</ListIdContext.Provider>
}

export {ListIdContext, ListIdProvider}