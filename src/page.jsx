import {Outlet} from 'react'
import Footer from "./components/footer";
import Header from "./components/header";

export default function Page(){
    return(
        <>
        
        <Header></Header>
        <Outlet></Outlet>
<Footer/>        
        </>
    )
}