// import Header from './header'
// import Menu from './menu'
import MenuHeader from './MenuHeader'
import RotatingList from './RotatingList'
import NewListForm from './NewListForm'

export default function HomePage({setUser}){
    return(
        <>
        <MenuHeader setUser= {setUser}/>
        <RotatingList/>
        <br/>
        <NewListForm/>
        </>
    )
}