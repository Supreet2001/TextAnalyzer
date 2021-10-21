import React from 'react'
import {About} from "./About";
import TextForm from './TextForm';
export const Content = (props) => {
    const showAlert=props.showAlert;
    const heading="Text Analyser";
    const mode=props.mode;
    const colorName=props.colorName;
    const areaColor=props.areaColor;
    if(props.content==="home"){
        return(
            <>
               <div className="container my-3">
            <TextForm
              heading={heading}
              mode={mode}
              showAlert={showAlert}
              colorName={colorName}
              areaColor={areaColor}
            />
          </div>
            </>
        )
    }
    else return(
        <>
            <div className="container my-3">
            <About 
            mode={mode}
            colorName={colorName}
            areaColor={areaColor}
            />
          </div>
        </>
        )
}
