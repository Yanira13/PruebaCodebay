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
            <div>
                <h2>Intro copy headline</h2>
                <p></p>
            </div>
            <ImgGroup/>
            <WidgetsFooter/>
            <div>Copyright</div>
        </div>
    )
}