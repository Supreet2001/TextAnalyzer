import "./App.css";
import { Navbar } from "./components/Navbar";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
function App() {
  const image = "font.png";
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [colorName, setColorName] = useState("light");
  const [content, setContent] = useState("home");
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1900);
  };
  const removeClass=()=>{
      
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-info");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-warning");
    if(document.getElementById("myBox")!==null){

      document.getElementById("myBox").style.backgroundColor="white";
    }
  }
  const areaColor=()=>{
    if(colorName==="success"){
      return "rgb(163, 207, 187)"
    }
    else if(colorName==="info"){
      return "rgb(158, 234, 249)"
    }
    else if(colorName==="warning"){
      return "rgb(255, 230, 156)"
    }
    else if(colorName==="danger"){
      return "rgb(241, 174, 181)"
    }
    else if(colorName==="light"){
      return "white"
    }
}
  const manipulate=(clr)=>{
    setColorName(clr);
    removeClass();
    showAlert(`The ${clr} theme has been enabled`,clr);
    document.getElementById("navbar").style.backgroundColor="#e3f2fd";
    if(clr!=="light"){
      document.body.classList.add(`bg-${clr}`);
      
    }
   
    
  }

  const toggleMode = () => {
    removeClass();
    setColorName("light");
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#181818";
      showAlert("The Dark mode has been enabled.", "success");
    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert("The Light mode has been enabled.", "success");
    }
    console.log(mode);
    
  };
  const setingContent=(cont)=>{
    if(cont==="home"){
      setContent("home");
    }
    else{
      setContent("about");
    }
    
  }
  
  return (
    <>
     
        <Navbar
        title="TextUtils"
        image={image}
        mode={mode}
        toggleMode={toggleMode}
        removeClass={removeClass}
        manipulate={manipulate}
        setingContent={setingContent}
      />
      <div style={{height:"70px"}}>
          <Alert alert={alert} />
      </div>

       
          <Content content={content} 
              heading="Text Analyser"
              mode={mode}
              showAlert={showAlert}
              colorName={colorName}
              areaColor={areaColor}

          />
          <Footer mode={mode}/>
    </>
  );
}

export default App;
