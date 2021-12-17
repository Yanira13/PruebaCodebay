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
                <div>

                </div>
                
            </div>
            <ImgGroup/>
            <WidgetsFooter/>
            <div className="bg-dark text-light text-center">©2021 Codebay</div>
        </div>
    )
}