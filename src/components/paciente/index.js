import HeaderSystem from "./headerPaciente";
import MainSystem from "./mainPaciente";
import Menu from "./menu";
import { useState } from "react";

function Main() {
    const [visibleSideBar, setVisibleSideBar] = useState(true);

 
    return(
        <div style={{backgroundColor: 'rgba(218, 218, 218, 1)', width: '100vw', height: '100vh'}}>
        <HeaderSystem setVisibleSideBar={setVisibleSideBar}/>
        <Menu visibleSideBar={visibleSideBar} setVisibleSideBar={setVisibleSideBar}/>
    
        </div>
    )

}

export default Main;