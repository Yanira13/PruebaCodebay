import React from "react";
import Header from "./components/Header";
import HeaderShop from "./components/headerShop/HeaderShop";
import Slider from "./components/Slider";

export default function Home (){
    return(
        <div>
            <HeaderShop/>
            <Header/>
            <Slider/>
            <p>
                <h2>Intro copy headline</h2>
            </p>
        </div>
    )
}