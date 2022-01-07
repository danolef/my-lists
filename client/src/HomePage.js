// import Header from './header'
// import Menu from './menu'
import MenuHeader from './MenuHeader'
import NewListForm from './NewListForm'
import RContainer from './RContainer'

export default function HomePage({setUser}){
    return(
        <>
        <MenuHeader setUser= {setUser}/>
        <RContainer/>
        <br/>
        <NewListForm/>
        </>
    )
}