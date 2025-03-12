import {Outlet} from 'react-router-dom'
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from './components/Menu';

export default function Page(){
    return(
        <>
        
        <Header></Header>
<Menu></Menu>
<Footer/>        
        </>
    )
}