import React from "react";
import Header from "./components/Header";
import HeaderShop from "./components/HeaderShop";
import Slider from "./components/Slider";

export default function Home (){
    return(
        <div>
            <HeaderShop/>
            <Header/>
            <Slider/>
        </div>
    )
}