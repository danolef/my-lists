import {createContext, useState } from 'react'

const ListContext = createContext();

function ListProvider({children}){
    const [listArr, setListArr] = useState([])
    return <ListContext.Provider value={{listArr, setListArr}}>{children}</ListContext.Provider>
}

export {ListContext, ListProvider}