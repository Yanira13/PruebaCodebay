import React from "react";
import Header from "./components/Header";
import HeaderShop from "./components/headerShop/HeaderShop";
import ImgGroup from "./components/ImgGroup";
import Slider from "./components/Slider";
import WidgetsFooter from "./components/WidgetsFooter";

export default function Home (){
    return(
        <div>
            <HeaderShop/>
            <Header/>
            <Slider/>
            <div className="d-flex-row justify-content-center mb-5">
                <h2 className="mt-5 mb-3 text-center" style={{marginRight:15+'em',marginLeft:15+'em'}}>Intro copy headline</h2>
                <p className="text-center" style={{marginRight:20+'em',marginLeft:20+'em'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>
            </div>
            <ImgGroup/>
            <WidgetsFooter/>
            <div >Copyright</div>
        </div>
    )
}