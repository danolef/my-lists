import {createContext, useState } from 'react'

const ListNameContext = createContext();

function ListNameProvider({children}){
    const [listName, setListName] = useState([])
    return <ListNameContext.Provider value={{listName, setListName}}>{children}</ListNameContext.Provider>
}

export {ListNameContext, ListNameProvider}