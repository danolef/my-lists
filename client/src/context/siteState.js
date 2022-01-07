import {createContext, useState } from 'react'

const SiteContext = createContext();

function SiteProvider({children}){
    const [site, setSite] = useState([])
    return <SiteContext.Provider value={{site, setSite}}>{children}</SiteContext.Provider>
}

export {SiteContext, SiteProvider}